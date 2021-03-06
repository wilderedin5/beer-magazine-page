export const formatBeers = (beers) =>
  beers.map(
    ({
      image_url,
      name,
      desc,
      brewers_tips,
      id,
      contributed_by,
      first_brewed,
      abv,
    }) => ({
      image: image_url,
      name,
      desc,
      tips: brewers_tips,
      id,
      creator: contributed_by,
      date: first_brewed,
      abv,
    })
  );
