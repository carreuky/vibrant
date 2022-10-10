class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity_response
    def index 
        r=Event.all
        render json: r
    end

    def create
        event = Event.create!(event_params)
        render json: event,status: :ok
    end

    private
    def event_params
        params.permit(:eventname, :fee, :location, :date, :slots, :details, :user_id)
    end

    def render_unproccessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
end
