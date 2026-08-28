document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("page-title").innerText = SITE_CONFIG.siteTitle;
  document.getElementById("site-title-text").innerText = SITE_CONFIG.siteTitle;
  document.getElementById("main-header").style.backgroundColor = SITE_CONFIG.headerBgColor;
  
  document.getElementById("job-img").src = SITE_CONFIG.jobImage;
  document.getElementById("job-title").innerText = SITE_CONFIG.jobTitle;
  document.getElementById("company-name").innerText = SITE_CONFIG.companyName;
  document.getElementById("job-desc").innerText = SITE_CONFIG.jobDescription;
  
  const applyBtn = document.getElementById("apply-btn");
  applyBtn.innerText = SITE_CONFIG.applyButtonText;
  applyBtn.href = SITE_CONFIG.landingPage;
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("page-title").innerText = SITE_CONFIG.siteTitle;
  document.getElementById("site-title-text").innerText = SITE_CONFIG.siteTitle;
  document.getElementById("main-header").style.backgroundColor = SITE_CONFIG.headerBgColor;
  
  document.getElementById("job-img").src = SITE_CONFIG.jobImage;
  document.getElementById("job-title").innerText = SITE_CONFIG.jobTitle;
  document.getElementById("company-name").innerText = SITE_CONFIG.companyName;
  document.getElementById("job-desc").innerText = SITE_CONFIG.jobDescription;
  
  const applyBtn = document.getElementById("apply-btn");
  applyBtn.innerText = SITE_CONFIG.applyButtonText;
  applyBtn.href = SITE_CONFIG.landingPage;

  
  const signInBtn = document.getElementById("signin-btn");
  if (signInBtn) {
    signInBtn.href = SITE_CONFIG.signInUrl;
  }
});
