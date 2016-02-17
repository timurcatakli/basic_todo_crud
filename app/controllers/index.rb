get '/' do
  @todos = Todo.all
  erb :index
end

get '/secret' do
  redirect '/sessions/new' unless session[:user_id]
  "Secret area!"
end



delete '/todos/:id' do

  #get params from url
  @todo = Todo.find(params[:id]) #define todo to delete

  if @todo.destroy #delete todo
    status 200
  else
    status 422
  end







end


post '/todos' do
puts '=' * 80
puts params[:todo]
puts '=' * 80

  #below works with properly formatted params in HTML form
  

  @todo = Todo.new #create new todo
  @todo.title = (params[:todo])
  @todo.save
  if @todo.save #saves new todo or returns false if unsuccessful
    redirect '/' #links back to todos index page
  else
    erb :errors #shows an errors view you define
  end

end
