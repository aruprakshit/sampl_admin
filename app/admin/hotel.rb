ActiveAdmin.register Hotel do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end
  #

  permit_params :booking_date, :name

  controller do
    private

    def package_dates pkg_type
      case pkg_type
      when "weekend"
        collect_dates Date.today, Date.today + 1.year, 'THURSDAY'
      when "full_week"
        collect_dates Date.today, Date.today + 1.year, 'THURSDAY', 'SUNDAY'
      when "midweek"
        collect_dates Date.today, Date.today + 1.year, 'SUNDAY'
      end
    end

    def interval pkg_type
      case pkg_type
      when 'weekend'
        3
      when'midweek'
        4
      when 'full_week'
        7
      end
    end

    def collect_dates start_date, end_date, *days
      (start_date..end_date).select { |date| days.include? date.strftime("%^A") }
    end
  end

  collection_action :fetch_dates, method: :get do
    render :json => { dates: package_dates(params['package_type']), interval: interval(params['package_type'])}
  end


  form do |f|
    inputs 'Details' do
      f.input :name
      f.input :booking_date, as: :string, label: "Booked At"
    end
    actions
  end


end
