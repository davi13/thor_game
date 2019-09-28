Votre programme doit comparer les positions de Thor et de l'éclair de puissance.
Les coordonnées de Thor ne sont pas mises à jour par le programme arbitre (elles ne vous sont envoyées qu'au premier tour). 
Par conséquent, vous devez les mettre à jour à chaque fois que vous envoyez une commande de mouvement dans stdout, donc à chaque tour.
Plutôt que de tester toutes les directions possibles (8 conditions if ), vous pouvez tester les 4 directions principales et utiliser la concaténation pour les 4 autres.
Exemple : si Thor doit se déplacer au nord ("N") et à l'est ("E"), alors la bonne commande est simplement "N"+"E"="NE".