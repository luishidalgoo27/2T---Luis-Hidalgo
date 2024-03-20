xquery version"1.0" encoding"UTF-8";
"Pokemons de agua femeninos",

<pokemon_agua_femeninos>{
    for $pokemon in //pokemon[genero = "Femenino" and @tipo = "agua"]
    return
<pokemon>
<nombre numeroPokedex="{data($pokemon/nombre/@numeroPokedex)}">
{data($pokemon/nombre)}
</nombre>
<estado vida="{data($pokemon/estado/puntosVida)}">
{data($pokemon/estado/faseEvolucion)}
</estado>
</pokemon>
}</pokemon_agua_femeninos>