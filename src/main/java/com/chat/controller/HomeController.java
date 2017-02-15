package com.chat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by dorsa on 2/15/17.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String home(){
        return "home";
    }
}
