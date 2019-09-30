import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer J8nff1Abzmu9StrNGDwoflHMX01VomnpM1RoA3YHwnGRp0lDSexPlOXSCLhteXlivbtTxfrZ3JqUoxHNhjb4eezrOFdC0g-lbNNosYwy_CcjBkgel8htKTXfnKyOXXYx"
  }
});
