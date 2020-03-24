# frozen_string_literal: true

class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def update
    current_user.liked_posts << params[:id].to_i
    current_user.save
  end
end
