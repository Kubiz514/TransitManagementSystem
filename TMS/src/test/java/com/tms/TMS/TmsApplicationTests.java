package com.tms.TMS;

import com.tms.TMS.Models.Stop;
import com.tms.TMS.Repositories.IStopRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.mockito.Mockito.when;

@SpringBootTest
class TmsApplicationTests {

	@InjectMocks
	ApiErrorsService _sut;

	@Mock
	IStopRepository repository;

	@Test
	void IStopRepository_ShouldReturnStopWhenExists() {

		var _id = 1L;
		var _latitude = (float) 10.10;
		var _longitude = (float) 11.11;

		var stopToSave = new Stop();
		stopToSave.Id = _id;
		stopToSave.Latitude = _latitude;
		stopToSave.Longitude = _longitude;

		when(repository.findById(_id)).thenReturn(Optional.of(stopToSave));

		Optional<Stop> foundStop = repository.findById(_id);

		assert foundStop.get().Id == _id;
		assert foundStop.get().Latitude == _latitude;
		assert foundStop.get().Longitude == _longitude;

	}

	@Test
	void ApiErrorsService_ShouldThrow_WithValidMessageAndStatusCode() {

		var message = "";
		try    {
			_sut.showErrorMessage(500, "Server error");
		} catch (Exception e) {
			message = e.getMessage();
		}

		assert message.contains("Server error");
	}

}
