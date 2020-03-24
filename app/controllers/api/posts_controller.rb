# frozen_string_literal: true

class Api::PostsController < ApplicationController
  def index
    render json: User.all_posts(current_user.liked_posts)
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end
end
