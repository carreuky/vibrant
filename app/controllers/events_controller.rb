class EventsController < ApplicationController
    def index 
        r=Event.all
        render json: r
    end
end
