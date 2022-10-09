class EventSerializer < ActiveModel::Serializer
  attributes :id ,:eventname ,:fee,:location ,:date ,:slots ,:details
end
