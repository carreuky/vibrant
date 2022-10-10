class UsersController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user ,serializer: ShowUserEventsSerializer, status: :ok
    end

    def index
        user =User.all
        render json: user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def authorize(invalid)
        return render json: { errors: invalid.record.errors.full_messages }, status: :unauthorized unless session.include? :user_id
    end

end