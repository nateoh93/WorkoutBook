# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  birthday        :date             not null
#  bio             :text
#  city            :string
#  work            :string
#  school          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :password_digest, :session_token, presence: true
    validates :email, presence: {message: "Email can't be blank"}
    validates :fname, presence: {message: "First name can't be blank"}
    validates :lname, presence: {message: "Last name can't be blank"}
    validates :birthday, presence: {message: "Birthday can't be blank"}
    validates :session_token, uniqueness: true
    validates :email, uniqueness: {message: 'Email has already been taken'}
    validates :password, length: { minimum: 6, message: 'Password is too short (minimum is 6 characters)' }, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password 

    has_one_attached :cover_photo
    has_one_attached :profile_photo
    
    has_many :friendships,
        foreign_key: :user1_id,
        class_name: :Friendship,
        dependent: :destroy
        # inverse_of: :user
    
    has_many :friends,
        through: :friendships,
        source: :friend

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user 
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end
end
