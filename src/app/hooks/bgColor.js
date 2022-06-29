
 const bgColor = (type) => {
    switch (type) {
      case "fire":
        return "bg-red-600";
        break;
      case "grass":
        return "bg-green-500";
        break;
      case "water":
        return "bg-blue-500";
        break;
      case "bug":
        return "bg-lime-500";
        break;
      case "normal":
        return "bg-gray-500";
        break;
      case "poison":
        return "bg-purple-700";
        break;
      case "electric":
        return "bg-yellow-400";
        break;
      case "ground":
        return "bg-orange-900";
        break;
      case "fairy":
        return "bg-gradient-to-r from-indigo-400 to-purple-500";
        break;
      case "fighting":
        return "bg-gradient-to-r from-orange-900 to-amber-800";
        break;
      case "psychic":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
        break;
      case "rock":
        return "bg-amber-700";
        break;
    }
  };

  export default bgColor