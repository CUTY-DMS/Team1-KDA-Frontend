import axios from "axios";

export const informationModify = async (data) => {
  const response = await axios.patch(`/admin/infoChange`, data, {
    params: {
      gradeClass: `${data}`,
    },
    headers: {
      Authorization: {
        params: {
          gradeClass: `${data}`,
        },
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbi5jb20iLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE2OTAxOTkzMjYsImV4cCI6MTY5MDIwMTEyNn0.YBMMuBcyTBMRpXjsX4zv6O5qAKU63OtlholF6D5ejWE",
        },
      },
    },
  });
  return response;
};
