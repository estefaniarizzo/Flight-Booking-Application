const API_URL = "http://localhost:3000"; // URL backend

// Obtener todos los vuelos sin filtros
export const getAllFlights = async () => {
  try {
    const response = await fetch(`${API_URL}/flights`);
    if (!response.ok) {
      throw new Error("Failed to fetch all flights");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all flights:", error);
    throw error;
  }
};

// Obtener vuelos según filtros (origen, destino, fecha)
export const getFlights = async (origin, destination, date) => {
  try {
    const response = await fetch(
      `${API_URL}/flights/search?origin=${origin}&destination=${destination}&date=${date}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch flights");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

