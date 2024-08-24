import React from "react";
import "./Contact.scss";
import { DiscFull, DisplaySettings } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="contact" >
      <h1>Contact Us</h1>

      <div className="container">
        <div className="left">
          <h2>Management Office</h2>

          <span className="address">
            31 Porterfield Crescent, Thornhill, ON L3T 5C3
          </span>
          <span className="address">Telephone – 905.731.7279</span>
          <span className="address">Fax – 905.731.7657</span>
          <div className="emergencyContacts">
            <span>After Hours Emergency ………. 647.333.2139</span>
            <span>Overnight Parking ……………… 905.731.7279 x 50</span>
          </div>
          <div className="officeHours">
            <h3>Office Hours</h3>
            <table>
              <tr>
                <td>Monday</td>
                <td>8:00 am -5:30pm</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8:00 am -5:30pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>8:00 am -5:30pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>8:00 am -5:30pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Row 5, Column 2</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="right">
          <div className="formContainer">
            <h2>Have a question or comment?</h2>
            <form action="#">
              <div class="form-group">
                <label for="category">Category:</label>
                <select id="category" name="category">
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input className="input-contact" type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input className="input-contact" type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="contact">Contact Number:</label>
                <input className="input-contact" type="tel" id="contact" name="contact" required />
              </div>
              <div class="form-group">
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" required></textarea>
              </div>
              <div
                class="form-group checkbox-group"
              >
                <input className="input-checkbox" type="checkbox" id="robot" name="robot" required />
                <label for="robot">I am not a robot</label>
              </div>
              <div class="form-group">
                <button type="submit">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
