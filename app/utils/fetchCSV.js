import Papa from "papaparse";

export const fetchCSVData = async (csvPath) => {
  try {
    const response = await fetch(csvPath); // Load the CSV file
    const csvText = await response.text(); // Convert response to text

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => resolve(result.data),
        error: (error) => reject(error),
      });
    });
  } catch (error) {
    console.error("Error fetching CSV:", error);
    return [];
  }
};
