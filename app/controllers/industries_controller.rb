class IndustriesController < ApplicationController
  before_action :set_industry, only: [:show, :edit, :update, :destroy]

  def index
    @industry_names = Industry.all.map(&:name)
    @industries = Industry.all
  end

  def show
  end

  def new
    @industry = Industry.new
  end

  def edit
  end

  def create
    @industry = Industry.new(industry_params)

    respond_to do |format|
      if @industry.save
        format.html { redirect_to @industry, notice: 'Industry was successfully created.' }
        format.json { render :show, status: :created, location: @industry }
      else
        format.html { render :new }
        format.json { render json: @industry.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @industry.update(industry_params)
        format.html { redirect_to @industry, notice: 'Industry was successfully updated.' }
        format.json { render :show, status: :ok, location: @industry }
      else
        format.html { render :edit }
        format.json { render json: @industry.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @industry.destroy
    respond_to do |format|
      format.html { redirect_to industries_url, notice: 'Industry was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_industry
      @industry = Industry.find(params[:id])
    end

    def industry_params
      params.require(:industry).permit(:name, :conversion_rate)
    end
end
