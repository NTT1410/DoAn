import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Apis, { endpoints } from "../../configs/Apis";

const EditBanner = () => {
  const { bannerId } = useParams();
  const [banner, setBanner] = useState();

  useEffect(() => {
    const loadDpm = async () => {
      let e = endpoints["banners-full"];

      if (bannerId != null) {
        e = `${e}?bannerid=${bannerId}`;
      }
      let res = await Apis.get(e);
      setBanner(res.data[0]);
      console.log(res.data[0]);
    };
    loadDpm();
  }, [bannerId]);
  return (
    <>
      <main className="main-container sm">
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={banner ? banner.title : ""}
            />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">
              {banner ? banner.link : ""}
            </label>
            <input
              type="file"
              class="form-control"
              id="image"
              //   src={banner ? banner.link : ""}
            />
          </div>
          <div class="mb-3 form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="status"
              checked={banner ? banner.status : ""}
            />
            <label class="form-check-label" for="status">
              Status
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default EditBanner;
