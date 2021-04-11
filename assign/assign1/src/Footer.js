import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return(
          <footer class="text-muted py-5 bg-dark">
            <div class="container">
              <p class="float-end mb-1">
                <a href="#">Back to top</a>
              </p>
              <p class="mb-1">30019578 - COMP.6210 - Assignment 1</p>
            </div>
          </footer>
        );
    }
}

export default Footer;