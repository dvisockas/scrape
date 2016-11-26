class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def resource
    if params[:url].present?
      response = HTTParty.get(params[:url])

      render html: response.body.html_safe
    else
      response = HTTParty.get("https://dezutes.lt/#{ [params[:path], params[:format]].join('.') }")

      send_data response.body, type: response.headers.content_type, disposition: 'inline'
    end
  end
end
