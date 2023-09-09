import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Apis, { endpoints } from "../../configs/Apis";

const EditBanner = () => {
  const { bannerId } = useParams();
  const [banner, setBanner] = useState(null);
  const [checked, setChecked] = useState(false);

  const enable = (evt) => {
    setChecked(!checked);
  };

  useEffect(() => {
    const loadDpm = async () => {
      if (bannerId !== undefined) {
        let e = endpoints["banners-full"];
        e = `${e}?bannerid=${bannerId}`;
        let res = await Apis.get(e);
        setBanner(res.data[0]);
        setChecked(Boolean(res.data[0].status));
      }
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
            <label for="link" class="form-label">
              {banner ? banner.link : ""}
            </label>
            <input
              type="file"
              class="form-control"
              id="link"
              name="link"
              src={banner ? banner.link : ""}
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="status"
              name="status"
              onClick={enable}
              checked={checked}
            />
            <label class="form-check-label" for="status">
              Status
            </label>
          </div>
          <div>
            <Link to="/banners">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default EditBanner;
