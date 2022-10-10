class AttendeesController < ApplicationController

def create
    attendee=Attendee.create(attendee_params)
    render json: attendee, status: :ok
end


private
def attendee_params
    params.permit(:name, :email, :phonenumber)
end

end
