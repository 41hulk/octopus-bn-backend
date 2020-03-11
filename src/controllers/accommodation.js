/* eslint-disable require-jsdoc */
import Models from 'database/models';
import uuid from 'uuid/v4';
import { successResponse, errorResponse } from 'utils/responses';
import setLanguage from 'utils/international';
import bookingService from 'services/bookingService';

const { Accommodations, Rooms, travelRequests, Booking, Feedbacks } = Models;

class accommodation {
  static async create(req, res) {
    try {
      const {
        body: {
          name, country, city, imageUrl, amenities, around
        }, user: { id, preferedLang }
      } = req;
      const charName = name.toLowerCase();
      const results = await Accommodations.create({
        id: uuid(),
        name: charName,
        country,
        city,
        createdBy: id,
        imageUrl,
        amenities,
        around
      });

      return res.status(201).json({
        status: 201,
        message: setLanguage(preferedLang).__('AccommodationCreated'),
        data: {
          results
        }
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        errors: {
          error: error.message
        }
      });
    }
  }

  static async addRoom(req, res) {
    try {
      const {
        body: {
          accommodationsID, roomNumber, cost, currency, type
        }, user: { id, preferedLang }
      } = req;
      const results = await Rooms.create({
        id: uuid(),
        status: true,
        accommodationsID,
        roomNumber,
        cost,
        currency,
        type,
        createdBy: id
      });
      return res.status(201).json({
        status: 201,
        message: setLanguage(preferedLang).__('roomAdded'),
        data: results
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        errors: {
          error: error.message
        }
      });
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} accomodations
   */
  static async getAccommodationPerDestination(req, res) {
    try {
      const {
        query: {
          page, limit,
          id
        },
        user: {
          preferedLang
        }
      } = req;
      const findRequest = await travelRequests.findOne({ where: { id } });

      if (!findRequest) {
        return errorResponse(res, 404, setLanguage(preferedLang).__('noRequestFound'));
      }

      if (findRequest.status !== 'pending') {
        return errorResponse(res, 403, setLanguage(preferedLang).__('rejected'));
      }

      const to = findRequest.to.split(' - ')[1];
      const accommodations = await bookingService.getAccommodations(to, page, limit);
      if(accommodations === null){
        return errorResponse(res, 404, setLanguage(preferedLang).__('NoAccommondation'));
      }

      return successResponse(res, 200, setLanguage(preferedLang).__('accommodationsPerDest'), accommodations);
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

  static async bookAccommodation(req, res) {
    try {
      const {
        body: {
          accommodationId, roomId, tripId, checkIn, checkOut
        },
        user: {
          preferedLang, id
        }
      } = req;

      await Booking.create({
        id: uuid(),
        userId: id,
        accommodationId,
        roomId,
        checkOut,
        tripId,
        checkIn,
        isPaid: false
      });

      await Rooms.update(
        { status: false }, { where: { id: roomId } }
      );

      return successResponse(res, 201, setLanguage(preferedLang).__('bookedSuccess'));
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }
  static async feedback(req, res){
    try {
    const {
      query: {
        accommodationId
      },
      body: {
        feedback
      },
      user: {
        id, email, preferedLang
      }
    } = req;
    const data = await Accommodations.findAll({
      where: {id: accommodationId}
    })
    if(data.length <= 0){
      return errorResponse(res, 404, setLanguage(preferedLang).__('AccommodationNotFound'));
    }
      await Feedbacks.create({
        id: uuid(),
        accommodationId,
        feedback,
        userId: id
      });
      return successResponse(res, 201, setLanguage(preferedLang).__('ThankFeedback'));
    } catch (error) {
      return errorResponse(res, error.status || 500, error.message);
    }
  }
}

export default accommodation;
