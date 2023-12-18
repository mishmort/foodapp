import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Chip,
} from "@mui/material";
import "./restaurantform.css";
import MainButton from "../../Components/MainButton/MainButton";

const RestaurantForm = () => {
  const marks = [
    { value: 0, label: "$: Afforable" },
    { value: 50, label: "$$: Standard" },
    { value: 100, label: "$$$: Premium" },
  ];

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  // Handle adding new tags
  const handleAddTag = () => {
    console.log("clicked");
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  // Handle deleting a tag
  const handleDeleteTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  const rows = new Array(5).fill(null);

  return (
    <div className="restaurantForm">
      <h1>Create your restaurant profile</h1>
      <TextField
        fullWidth
        label="Restaurant Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <h1>Main Photo:</h1>
      <div className="mainImage">
        <div className="mainUpload">
          <p>Drag and drop images here or</p>
          <MainButton variant="contained">Browse</MainButton>
        </div>
        <div className="mainPreview">Image Preview</div>
      </div>
      <h1>Cover Photo:</h1>
      <div className="coverImage">
        <div className="coverUpload">
          <p>Drag and drop images here or</p>
          <MainButton variant="contained">Browse</MainButton>
        </div>
      </div>
      <h1>Location:</h1>
      <TextField
        fullWidth
        label="Enter your address"
        variant="outlined"
        margin="normal"
      />
      <div className="map"></div>
      <h1>Hours: </h1>
      Indicate your operating hours
      <FormGroup>
        {[
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <div key={day} className="day-time">
            <TextField
              type="time"
              defaultValue="09:00"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type="time"
              defaultValue="17:00"
              InputLabelProps={{ shrink: true }}
            />

            <FormControlLabel
              control={<Checkbox name="closed" />}
              label="Closed"
            />

            <label className="weekday">{day}</label>
          </div>
        ))}
      </FormGroup>
      <h1>Dietary Restrictions:</h1>
      Indicate if you have any menu items suitable for specific dietary
      Restrictions
      <div className="custom-table">
        {rows.map((_, index) => (
          <div key={index} className="table-row">
            <div className="logo-cell">
              <div className="logo-placeholder"></div>
            </div>
            <div className="text-cell">
              Lorem ipsum: dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
            <div className="checkbox-cell">
              <Checkbox />
            </div>
          </div>
        ))}
      </div>
      {/* Tag input */}
      <h1>Restaurant Type:</h1>
      Add some tags that describe your restaurant. (Example: "Live Music",
      "Patio")
      <div className="tags-input">
        <TextField
          label="Add Tags"
          fullWidth
          variant="outlined"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          margin="normal"
        />
        <MainButton fullWidth color="primary" onClick={handleAddTag}>
          Add Tag
        </MainButton>
        <div className="tags-display">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} onDelete={handleDeleteTag(tag)} />
          ))}
        </div>
      </div>
      {/* Price Range Slider */}
      <h1>Price Range:</h1>
      Describe the overall price range of your menu
      <Slider defaultValue={50} step={null} marks={marks} min={0} max={100} />
      {/* Contact section */}
      <h1>Contact:</h1>
      How can your customers get in contact with you?
      <TextField
        fullWidth
        type="email"
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        type="tel"
        label="Phone Number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Instagram"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="Twitter" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Facebook"
        variant="outlined"
        margin="normal"
      />
      <TextField fullWidth label="TikTok" variant="outlined" margin="normal" />
      <MainButton fullWidth variant="contained" color="primary">
        Submit
      </MainButton>
    </div>
  );
};

export default RestaurantForm;
