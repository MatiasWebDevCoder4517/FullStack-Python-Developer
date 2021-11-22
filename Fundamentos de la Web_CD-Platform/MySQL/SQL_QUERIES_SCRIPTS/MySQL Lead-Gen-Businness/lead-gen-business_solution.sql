
/*** IMCOMPLETE ***/

-- 1 --
/*
SELECT monthname(charged_datetime), sum(billing.amount) FROM billing
WHERE charged_datetime >= '2012-03-01' AND  charged_datetime <= '2012-03-31';
*/

-- 2 --
/*
SELECT billing.client_id, sum(billing.amount) FROM billing
WHERE billing.client_id = 2;
*/

-- 3 --
/*
SELECT sites.domain_name, sites.client_id
FROM sites
WHERE sites.client_id = 10;
*/

-- 4 --
/*
SELECT sites.client_id, count(sites.domain_name), monthname(created_datetime), YEAR(created_datetime)
FROM sites
WHERE client_id = 1
-- WHERE client_id = 20
GROUP BY YEAR(created_datetime), YEAR(created_datetime);
*/

-- 5 --
/*
SELECT count(leads_id), sites.domain_name, DATE_FORMAT(leads.registered_datetime,'%M %d, %Y')
FROM sites
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/01/01' AND '2011/02/15'; 
*/

-- 6 --

