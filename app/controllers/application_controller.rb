class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def resource
    if params[:url].present?
      url = URI.parse(params[:url])
      session[:host] = "#{url.scheme}://#{url.host}"

      response = HTTParty.get(params[:url])

      render html: response.body.html_safe
    else
      response = HTTParty.get("#{session[:host]}/#{ [params[:path], params[:format]].join('.') }")

      send_data response.body, type: response.headers.content_type, disposition: 'inline'
    end
  end
end
