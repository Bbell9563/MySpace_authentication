# frozen_string_literal: true

class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: Post.all
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end
end
