describe('empty spec', () => {
  
  const testModeApiUrl = 'http://localhost:80/api';
  const sidekickApiUrl = 'https://api.service.runsidekick.me/api/v1';
  const testModeApiKey = 'dceec4b5-90ac-438c-bc81-c7fe1b0b8ed2';
  const sidekickApiKey = 'dceec4b5-90ac-438c-bc81-c7fe1b0b8ed2';
  const sidekickApiToken = '38f99e83-0e53-11ed-b156-0a019d0faa09';

    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:3000/speakers')
      })
  
  
    it('putTracepoint', () => {
      const putTracepointRequest = {
        method: 'POST',
        url: `${sidekickApiUrl}/tracepoint`,
        headers: {
          apikey: sidekickApiKey,
          'Authorization': `Token ${sidekickApiToken}`
        },
        body: {
          "applicationFilters": [
            {
              "name": "sidekick-demo-app",
              "version": "1.0",
              "stage": "lab",
              "customTags": {
              }
            }
          ],
          "fileName": "app/routes/speakers.js",
          "lineNo": 24,
          "expireSecs": 300,
          "expireCount": 100,
          "persist": true
        }
      }
      cy.api(putTracepointRequest)
    })


    it('disableTag', () => {
      const disableTagRequest = {
        method: 'PUT',
        url: `${sidekickApiUrl}/probetags/disable`,
        headers: {
          apikey: sidekickApiKey,
          'Authorization': `Token ${sidekickApiToken}`
        },
        body: {
          "tag": "test"
        }
      }
      cy.api(disableTagRequest)
    })

    it('get error results', () => {
      const getError = {
        url: `${testModeApiUrl}/events/errorstack`,
        headers: {
          'Authorization': `Bearer ${testModeApiKey}`
        }
      };
      const clearError = {
        method: 'POST',
        url: `${testModeApiUrl}/events/flush?eventType=ERROR_STACK_SNAPSHOT`,
        headers: {
          'Authorization': `Bearer ${testModeApiKey}`
        }
      };
      cy.api(getError)
      cy.request(clearError)
    })
    
  
    it('get tracepoint snapshot', () => {
      const getSnapshot = {
        method: 'POST',
        url: `${testModeApiUrl}/events/tracepoint`,
        headers: {
          'Authorization': `Bearer ${testModeApiKey}`
        },
        body: {
          "appName": "sidekick-demo-app",
          "fileName": "app/routes/speakers.js",
          "lineNo": 13
        }
      };
      const clearTracepointSnapshots = {
        method: 'POST',
        url: `${testModeApiUrl}/events/flush?eventType=TRACEPOINT_SNAPSHOT`,
        headers: {
          'Authorization': `Bearer ${testModeApiKey}`
        }
      };
      cy.api(getSnapshot)
      cy.request(clearTracepointSnapshots)
    })
  })