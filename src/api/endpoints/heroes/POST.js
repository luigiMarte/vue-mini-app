// Simulated API function to create a hero
export const createHero = async (fields) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({
        success: true,
        message: "Hero created successfully!",
        data: {
          id: Math.random().toString(36).substr(2, 9), // Random ID
          ...fields,
        },
      });
    }, 1000); // 1 second delay
  });
};
