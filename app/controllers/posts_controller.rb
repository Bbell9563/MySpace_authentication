# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :authenticate_user
  def index
    render json: User.all_posts(current_user.liked_posts)
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end

  def show; end

  def new; end

  def edit; end
end
