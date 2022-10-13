# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Anime.create([{name:"Naruto", image: "", description: "A show about naruto", rating:"8.5/10"},{name:"Naruto1", image: "", description: "A show about naruto", rating:"8.5/10"} ,
    {name:"Naruto3", image: "", description: "A show about naruto", rating:"8.5/10"},{name:"Naruto4", image: "", description: "A show about naruto", rating:"8.5/10"},
    {name:"Naruto5", image: "", description: "A show about naruto", rating:"8.5/10"},{name:"Naruto6", image: "", description: "A show about naruto", rating:"8.5/10"}
    {name:"Naruto7", image: "", description: "A show about naruto", rating:"8.5/10"},{name:"Naruto8", image: "", description: "A show about naruto", rating:"8.5/10"}
    {name:"Naruto9", image: "", description: "A show about naruto", rating:"8.5/10"},{name:"Naruto10", image: "", description: "A show about naruto", rating:"8.5/10"}])
Comment.create([{commentmsg:"It was such a good show", anime_id:1},{commentmsg:"It was such a good show",anime_id:2},{commentmsg:"It was such a good show",anime_id:1},{commentmsg:"It was such a good show",anime_id:2}])
