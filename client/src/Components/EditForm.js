import React, { useEffect, useState } from "react";

export default function EditForm({ eventEdit,setEdit,edit }) {
    console.log(edit)

  function handleSubmit() {
    fetch(
        `https://carmotive}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      )
        .then((r) => r.json())
        .then((updatedItem) => updateList(updatedItem));
        }
  return (
    <div>
      <button
        onClick={() => setEdit(!edit)}
        type="button"
        class="btn-close ml-5"
        aria-label="Close"
      ></button>
      <form className="col-6">
        <div className="container">
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Event name</label>
              <input
                type="text"
                class="form-control"
                value={eventEdit.eventname}
                id="exampleFormControlInput1"
                placeholder="event name"
              />
            </div>
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Fee</label>
              <input
                type="number"
                class="form-control"
                value={eventEdit.fee}
                id="exampleFormControlInput1"
                placeholder="fee"
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Location</label>
              <input
                type="location"
                class="form-control"
                id="exampleFormControlInput1"
                value={eventEdit.location}
                placeholder="Location"
              />
            </div>
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Slots</label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="slots"
                value={eventEdit.slots}
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-sm">
              <label for="exampleFormControlInput1">Date</label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="slots"
                value={eventEdit.date}
              />
            </div>
          </div>
          <div class="form-group mt-2 col-sm">
            <label for="exampleFormControlTextarea1">Details</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={eventEdit.details}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-lg text-white mt-3"
            onClick={handleSubmit}
            style={{
              border: "none",
              paddingRight: "2.5rem",
              backgroundColor: "#0D7CAC",
              fontSize: "18px",
              padding: "5px 40px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
