xquery version"1.0" encoding"UTF-8";
"Pokemons de agua femeninos",

<pokemon_agua_femeninos>
{
  for $x in //pokemon 
  where $x/@tipo = "agua" and $x/genero = "Femenino"
  return
  (
   <nombre numeroPokedex = "{$x/nombre/@numeroPokedex/data()}">
   {$x/nombre/data()}</nombre>
   <estado vida = ""></estado>
  )
}
</pokemon_agua_femeninos>