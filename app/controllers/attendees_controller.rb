class AttendeesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity_response

def create
    attendee=Attendee.create!(attendee_params)
    render json:{success:'Successfully submitted.'}, status: :created
end

def index
    attendee=Attendee.all
    render json: attendee, status: :ok
end

def show
    attendee=Attendee.find(params[:id])
    render json: attendee, status: :ok
end


private
def attendee_params
    params.permit(:name, :email, :phonenumber ,:event_id)
end

def render_unproccessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

end
