package com.tms.TMS.Services;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ApiErrorsService {
    public void showErrorMessage(int statusCode, String message) {
        throw new ResponseStatusException(HttpStatusCode.valueOf(statusCode), message);
    }
}
