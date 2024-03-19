package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public Optional<Activity> getActivityById(Long id) {
        return activityRepository.findById(id);
    }

    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public Activity updateActivity(Long id, Activity updatedActivity) {
        if (activityRepository.existsById(id)) {
            updatedActivity.setId(id);
            return activityRepository.save(updatedActivity);
        } else {
            // Handle error, throw exception, or return a meaningful response
            return null;
        }
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
