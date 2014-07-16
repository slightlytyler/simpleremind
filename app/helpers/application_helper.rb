module ApplicationHelper
  def nav_link(link_path, &block)
    class_name = current_page?(link_path) ? 'active' : ''

    content_tag(:li, :class => class_name) do
       if block_given?
        link_to link_path do
          yield
        end
      end
    end
  end
end
