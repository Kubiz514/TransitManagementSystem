package com.tms.TMS.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/mvc-bus")
public class BusMvcController {

    @GetMapping("/")
    public String mvcBus(){
        return "bus";
    }
}
