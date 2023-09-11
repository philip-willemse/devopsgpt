// JavaScript code for the frontend

// Define necessary functions and event listeners
$(document).ready(function() {
    // Event listener for CV upload button
    $('#upload-button').click(function() {
        var cvFile = $('#cv-file')[0].files[0];
        
        // Check if a file is selected
        if (!cvFile) {
            alert('Please select a CV file');
            return;
        }
        
        var formData = new FormData();
        formData.append('cv', cvFile);

        // Make AJAX request to upload CV document
        $.ajax({
            url: '/api/upload-cv',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response);
                // Make AJAX request to get matching jobs
                $.ajax({
                    url: '/api/matching-jobs',
                    type: 'GET',
                    success: function(response) {
                        console.log(response);
                        // Display matching jobs on the page
                        var jobsList = $('#jobs-list');
                        jobsList.empty();
                        response.jobs.forEach(function(job) {
                            jobsList.append('<li>' + job.title + '</li>');
                        });
                    },
                    error: function(error) {
                        console.log(error);
                        alert('Failed to get matching jobs');
                    }
                });
            },
            error: function(error) {
                console.log(error);
                alert('Failed to upload CV');
            }
        });
    });
});
