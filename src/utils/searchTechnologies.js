// src/utils/searchTechnologies.js

/**
 * Фильтрует технологии по поисковому запросу
 * @param {Array} technologies - массив технологий
 * @param {string} query - поисковый запрос
 * @returns {Array} отфильтрованный массив
 */
export const searchTechnologies = (technologies, query) => {
  if (!query.trim()) return technologies;

  const lowerQuery = query.toLowerCase().trim();

  return technologies.filter(tech =>
    tech.title.toLowerCase().includes(lowerQuery) ||
    tech.description.toLowerCase().includes(lowerQuery)
  );
};