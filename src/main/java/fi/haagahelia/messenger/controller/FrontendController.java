package fi.haagahelia.messenger.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {
    @GetMapping(path = { "/", "/{prefix:^(?!api|frontend).+}/**" })
	public String renderFrontend() {
		return "index";
	}
}
