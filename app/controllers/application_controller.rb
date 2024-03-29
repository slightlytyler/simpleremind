class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  layout :layout_by_resource

  def after_sign_in_path_for(resource)
    '/send'
  end

  def layout_by_resource
    if devise_controller? && resource_name == :user && action_name == 'edit'
      "application_tool_belt"
    else
      "application_home"
    end
  end
end
