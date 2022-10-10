class ShowUserEventsSerializer < ActiveModel::Serializer
  attributes :id ,:username

  has_many :events
end
