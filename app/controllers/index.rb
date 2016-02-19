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
  @todo.destroy #delete todo
  
  @todos = Todo.all
  if request.xhr?
    content_type :json
    {todo_id: params[:id]}.to_json
  else
    erb :index
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
  
  content_type :json
  {task: params[:todo], id: @todo.id}.to_json

end
