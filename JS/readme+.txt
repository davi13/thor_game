Pseudo-code

thorX ← initialTX
thorY ← initialTY
tant que vrai faire
	lire remainingTurns
	directionX ← ""
	directionY ← ""
	si thorY est plus grand que lightY alors
		directionY ← "N"
		thorY ← thorY - 1
	sinon si thorY est plus petit que lightY alors
		directionY ← "S"
		thorY ← thorY + 1
	fin si
	si thorX est plus grand que lightX alors
		directionX ← "W"
		thorX ← thorX - 1
	sinon si thorX est plus petit que lightX alors
		directionX ← "E"
		thorX ← thorX + 1
	fin si
	afficher la concatenation de directionY et de directionX
fin tant que