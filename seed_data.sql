-- Auto-generated Seed SQL for Legacy Architects Data --
BEGIN;

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d8c9bc37-af1d-48e5-9e1d-ff4be7d0c0b7', 'CA/1975/00001', 'Mr', 'JASDESH', 'SINGH', 'SODHI', 'Male', '1946-08-28', 'jds@sodhis.org', '9818130441', '1975-06-15', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d8c9bc37-af1d-48e5-9e1d-ff4be7d0c0b7', 'Communication', 'Block H - 51/A, Saket', '110017');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d8c9bc37-af1d-48e5-9e1d-ff4be7d0c0b7', 'Permanent', 'Block H - 51/A, Saket', '110017');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('79e8f949-3dfb-444c-bd59-7493a73eea14', 'CA/1975/00002', 'Mr', 'RAJESH KUMAR', NULL, 'AGGARWAL', 'Male', '1943-12-31', NULL, NULL, '1975-06-15', '1976-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('79e8f949-3dfb-444c-bd59-7493a73eea14', 'Communication', 'RAJESH AGGARWAL &amp; ASSO. N-14,N.D.S.E-I', '110049');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('79e8f949-3dfb-444c-bd59-7493a73eea14', 'Permanent', 'RAJESH AGGARWAL &amp; ASSO. N-14,N.D.S.E-I', '110049');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('c6b927ef-a92f-4bac-a0a1-2043d31c5563', 'CA/1975/00003', 'Mr', 'MUKUL', NULL, 'MITTRA', 'Male', '1948-01-10', NULL, NULL, '1975-06-15', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c6b927ef-a92f-4bac-a0a1-2043d31c5563', 'Communication', '164/B,BECHARAM CHATTERJEE ROAD, SARSUNA', '700061');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c6b927ef-a92f-4bac-a0a1-2043d31c5563', 'Permanent', '164/B,BECHARAM CHATTERJEE ROAD,SARSUNA', '700061');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3bd2d3ba-1987-469c-99f8-0bbe3c032e82', 'CA/1975/00005', 'Mr', 'N.T.', NULL, 'VENKATESH', 'Male', '1950-12-11', NULL, NULL, '1975-06-15', '1979-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3bd2d3ba-1987-469c-99f8-0bbe3c032e82', 'Communication', 'C/O.SAHER &amp; GANDIALI, ARCHITECTS, 14,LADY CURZON ROAD,', '560001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3bd2d3ba-1987-469c-99f8-0bbe3c032e82', 'Permanent', 'C/O.SAHER &amp; GANDIALI, ARCHITECTS, 14,LADY CURZON R', '560001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('8b0e0306-e708-4883-b75f-e44ec0d37986', 'CA/1975/00006', 'Mr', 'HARIHAR WASANTRAO', NULL, 'RAJE', 'Male', '1943-09-13', NULL, NULL, '1975-06-15', '2003-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8b0e0306-e708-4883-b75f-e44ec0d37986', 'Communication', '52, S.E. RAILWAY, IIND LAYOUT, RANA PRATAP NAGAR,', '440022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8b0e0306-e708-4883-b75f-e44ec0d37986', 'Permanent', 'A-4, FIRST FLOOR, GOKULPETH MARKET, OPP.SAROJ CINE', '440010');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('90cf9168-5402-4350-849b-ca6b47ea84d2', 'CA/1976/02333', 'Mr', 'PARKASH CHANDRA', NULL, 'JAITLY', 'Male', '1932-06-23', NULL, NULL, '1976-01-14', '2011-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90cf9168-5402-4350-849b-ca6b47ea84d2', 'Communication', 'HOUSE NO.35, ROAD NO.60, PUNJABI BAGH (W),', '110026');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90cf9168-5402-4350-849b-ca6b47ea84d2', 'Permanent', 'HOUSE No.35,ROAD No.60 PUNJABI BAGH', '110026');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d64097b4-e5c8-4656-a546-a8a798ffea23', 'CA/1976/02334', 'Mr', 'DULALCHANDRA', NULL, 'MUKHOPADHYAY', 'Male', '1939-06-04', NULL, NULL, '1976-01-14', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d64097b4-e5c8-4656-a546-a8a798ffea23', 'Communication', 'M/S.DULAL MUKHERJEE & ASSOCIATES, 601, LAKE GARDENS', '700045');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d64097b4-e5c8-4656-a546-a8a798ffea23', 'Permanent', 'DULAL MUKHERJEE &amp; ASSO. 28B,SHAKESPHEARE SARANI', '700017');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6d6b6be3-20c0-4651-92e8-f9249eb3252c', 'CA/1976/02335', 'Mr', 'KOGANTI', NULL, 'SRINATH', 'Male', '1950-03-30', NULL, NULL, '1976-01-14', '1985-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d6b6be3-20c0-4651-92e8-f9249eb3252c', 'Communication', 'NATIONAL TRANSPORTATION PLANNING& RESEARCH CENTRE SREEKANTESWARAM', '695023');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d6b6be3-20c0-4651-92e8-f9249eb3252c', 'Permanent', 'NATIONAL TRANSPORTATION PLANNING&amp; RESEARCH CENTRE', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e5fe69e6-4165-40c8-877a-c752cb9bc573', 'CA/1976/02336', 'Mr', 'NANDKISHOR SHRIDHAR', NULL, 'KHANOLKAR', 'Male', '1946-07-17', NULL, NULL, '1976-01-14', '1987-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e5fe69e6-4165-40c8-877a-c752cb9bc573', 'Communication', '42-95, MAIN STREET APT # 3M, FLUSHING N.Y.11355', '11355');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e5fe69e6-4165-40c8-877a-c752cb9bc573', 'Permanent', '42-95, MAIN STREET APT # 3M, FLUSHING N.Y.11355', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2f0ca6fc-ac73-418c-bad2-81dc0c666aa0', 'CA/1976/02337', 'Mr', 'JIMUT BAHAN', NULL, 'CHOUDHURI', 'Male', '1923-06-27', NULL, NULL, '1976-01-14', '1998-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2f0ca6fc-ac73-418c-bad2-81dc0c666aa0', 'Communication', 'C/O.MR.A.K.CHOUDHURI SR.ADVOCATE,STATION ROAD RAJENDRA PATH', '800001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2f0ca6fc-ac73-418c-bad2-81dc0c666aa0', 'Permanent', 'C/O.MR.A.K.CHOUDHURI SR.ADVOCATE,STATION ROAD RAJE', '800001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a595312e-bd66-4b0a-b4a1-71bc66ab8eae', 'CA/1977/03395', 'Mr', 'KANAGALA SARAT', NULL, 'KUMAR', 'Male', '1948-10-16', 'kskarch17@gmail.in', '9849082233', '1977-02-06', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a595312e-bd66-4b0a-b4a1-71bc66ab8eae', 'Communication', 'FLAT NO.02, FOUNTAIN HEAD APARTMENT, 3RD LINE, VIKAS NAGAR', '522006');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a595312e-bd66-4b0a-b4a1-71bc66ab8eae', 'Permanent', 'K S KUMAR ARCHITECT
FLAT NO:2,
FOUNTAINHEAD APARTMENT
3rd LANE VIKASNAGAR
GUNTUR-522006
ANDHRAPRADESH', '522006');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('68ee40c2-4e85-4ead-b71d-aac60984dd5b', 'CA/1977/03396', 'Mr', 'PRAMOD KUMAR', NULL, 'MEHROTRA', 'Male', '1944-11-23', NULL, NULL, '1977-02-06', '2021-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('68ee40c2-4e85-4ead-b71d-aac60984dd5b', 'Communication', '175, VIDYA VIHAR,
WEST ENCLAVE, PITAMPURA', '110034');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('68ee40c2-4e85-4ead-b71d-aac60984dd5b', 'Permanent', '175,VIDYA VIHAR PITAMPURA', '110034');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('999d159b-5ebf-45ac-a5eb-81c6109c362c', 'CA/1977/03397', 'Mr', 'RAVINDRA H.', NULL, 'GHUSTE', 'Male', '1946-09-14', NULL, NULL, '1977-02-06', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('999d159b-5ebf-45ac-a5eb-81c6109c362c', 'Communication', '&quot;GHUSTE HOUSE&quot;, MANDVI LANE, 
VESAWA, ANDHERI (W),', '400061');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('999d159b-5ebf-45ac-a5eb-81c6109c362c', 'Permanent', '&quot;GHUSTE HOUSE&quot; VERSOWA VILLAGE, ANDHERI', '400061');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f2b8dd34-1eba-40dd-9f52-2c55081ef7e3', 'CA/1977/03398', 'Mr', 'GOPAL DHARANEENDRA', NULL, 'PANICKER', 'Male', '1939-10-29', NULL, NULL, '1977-02-06', '2009-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f2b8dd34-1eba-40dd-9f52-2c55081ef7e3', 'Communication', 'PANICKER &amp; ASSOC. KRISHNA COMM. COMP., BAKERY JUNCTION,', '695001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f2b8dd34-1eba-40dd-9f52-2c55081ef7e3', 'Permanent', 'CHIEF ARCHITECT,P.W.D GOVT OF KERALA,MUSEUM PUB.OF', '695033');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('60ccfc82-805e-464f-abf3-6963ef3247d3', 'CA/1977/03399', 'Mr', 'VASANT R.', NULL, 'KSHIRSAGAR', 'Male', '1947-01-12', NULL, NULL, '1977-02-06', '1979-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('60ccfc82-805e-464f-abf3-6963ef3247d3', 'Communication', '46, JOYCE PLACE, PARLIN NEW JERSEY 08859, USA', '8859');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('60ccfc82-805e-464f-abf3-6963ef3247d3', 'Permanent', 'KUNDA VIHAR ABHYANKAR ROAD, SITABULDI', '440012');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bb11749d-c27f-4476-8101-f53b5fc7666f', 'CA/1978/04275', 'Mr', 'VASANT MANGESH', NULL, 'GHOLKAR', 'Male', '1940-09-30', NULL, NULL, '1978-01-12', '2000-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bb11749d-c27f-4476-8101-f53b5fc7666f', 'Communication', '27/11, SHIVAJI NIVAS DR.M.B.RAUT ROAD SHIVAJI PARK', '400028');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bb11749d-c27f-4476-8101-f53b5fc7666f', 'Permanent', '27/11, SHIVAJI NIVAS DR.M.B.RAUT ROAD SHIVAJI PARK', '400028');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('51278a9c-6bd7-45ef-bea6-8eb0f7391a3e', 'CA/1978/04276', 'Mr', 'SOBHANLAL', NULL, 'BANDYOPADHYAY', 'Male', '1939-10-02', NULL, NULL, '1978-01-12', '2015-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('51278a9c-6bd7-45ef-bea6-8eb0f7391a3e', 'Communication', '164/78, LAKE GARDENS, FLAT NO.A-13, SAND HEAD CO-OP.', '700045');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('51278a9c-6bd7-45ef-bea6-8eb0f7391a3e', 'Permanent', '220,ACHARYA J.C.BOSE ROAD', '700017');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('430ba3bb-f6aa-4e6f-8c5c-1fbfb8d98bb0', 'CA/1978/04277', 'Mr', 'SHIV DAYAL', NULL, 'BHATIA', 'Male', '1919-12-31', NULL, NULL, '1978-01-12', '2000-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('430ba3bb-f6aa-4e6f-8c5c-1fbfb8d98bb0', 'Communication', '144, KALYAN VIHAR', '110009');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('430ba3bb-f6aa-4e6f-8c5c-1fbfb8d98bb0', 'Permanent', '144, KALYAN VIHAR', '110009');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('39b6bafa-5ed4-4ff6-a620-8544ccdbb23c', 'CA/1978/04278', 'Mr', 'A.', NULL, 'RAJASEKHARAN', 'Male', '1947-09-20', 'rajasekharan1947@gmail.com', '9387805163', '1978-01-12', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('39b6bafa-5ed4-4ff6-a620-8544ccdbb23c', 'Communication', 'LAXMEERA, T.C. 2/3541-8,K-5D, KAILAS NAGAR, PATTOM PLACE P.O.,', '695004');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('39b6bafa-5ed4-4ff6-a620-8544ccdbb23c', 'Permanent', 'TC 2/3541-8,LAXMEERA,K-5D KAILAS NAGAR,PATTOM PALA', '695004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d62d16b9-83d5-4b9a-af11-59f229eaa9e7', 'CA/1978/04279', 'Mr', 'DIWAKAR N.', NULL, 'SHARMA', 'Male', '1947-07-31', NULL, NULL, '1978-01-12', '2011-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d62d16b9-83d5-4b9a-af11-59f229eaa9e7', 'Communication', 'B-1/34, FIRST FLOOR, HAUZ KHAS,', '110016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d62d16b9-83d5-4b9a-af11-59f229eaa9e7', 'Permanent', 'B-1/34(F.F.)HAUZ KHAS', '110016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('974b30e4-4c2f-4c39-846b-2d41ed5997be', 'CA/1979/04861', 'Mr', 'BABURAO DEORAM', NULL, 'MORE', 'Male', '1938-04-30', 'baburaodmore@gmail.com', '7588702969', '1979-01-11', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('974b30e4-4c2f-4c39-846b-2d41ed5997be', 'Communication', 'FLAT NO. 1, GANGA BUILDING, NEW MAHAVIR CO-OPERATIVE HOUSING SOCIETY, PETH ROAD, PANCHAVATI', '422003');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('974b30e4-4c2f-4c39-846b-2d41ed5997be', 'Permanent', 'MORE ASSOCIATES,1025/A  ASHOK SADAN ,SHUKLA LANE N', '422001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1f80aecf-9a2c-4f4d-8364-a9d1b5db3207', 'CA/1979/04862', 'Mr', 'J.K.', NULL, 'WADHAWAN', 'Male', '1939-11-25', NULL, NULL, '1979-01-11', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1f80aecf-9a2c-4f4d-8364-a9d1b5db3207', 'Communication', 'FLAT NO. 17, COSMO GR. HOUSING, 
PLOT NO. 28, SECTOR 10, DWARKA,', '110075');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1f80aecf-9a2c-4f4d-8364-a9d1b5db3207', 'Permanent', 'FLAT-17,COSMO APTS. PLOT-28,SECTOR-10 DWARKA', '110075');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ce3782e6-d0c4-4b2c-92ae-0774c141e804', 'CA/1979/04863', 'Mr', 'SURESH KESHAVRAO', NULL, 'THOMBRE', 'Male', '1940-10-26', NULL, NULL, '1979-01-11', '2008-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ce3782e6-d0c4-4b2c-92ae-0774c141e804', 'Communication', 'THOMBRES WADA BRAHMAPURI NAKA', '390001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ce3782e6-d0c4-4b2c-92ae-0774c141e804', 'Permanent', 'THOMBRE S WADA BRAHMAPURI NAKA', '390001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3b027e74-16b0-4519-ac46-d0eb488d8d71', 'CA/1979/04864', 'Mr', 'ASHOKKUMAR YESHWANT', NULL, 'NASHIKKAR', 'Male', '1939-11-21', NULL, NULL, '1979-01-11', '2010-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3b027e74-16b0-4519-ac46-d0eb488d8d71', 'Communication', 'PLOT NO. R/13 SHANTI NAGAR GUPTESHWAR', '482001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3b027e74-16b0-4519-ac46-d0eb488d8d71', 'Permanent', 'PLOT NO.R/13 SHAUTI NAGAR', '482001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3507185f-02f0-4009-80d6-9512402f38b1', 'CA/1979/04865', 'Mr', 'DHARAM', NULL, 'SINGH', 'Male', '1939-05-02', NULL, NULL, '1979-01-11', '2011-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3507185f-02f0-4009-80d6-9512402f38b1', 'Communication', 'DA/5A, DDA FLATS, MUNIRKA,', '110067');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3507185f-02f0-4009-80d6-9512402f38b1', 'Permanent', 'DA/5A,D.D.A. FLATS MUNIRKA', '110067');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cfe1dc92-d9c8-422c-8b3a-b0d79aa902e5', 'CA/1980/05441', 'Mr', 'R.LATHA', NULL, 'GUZAR', 'Female', '1963-12-13', 'guzararch@gmail.com', NULL, '1980-01-07', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cfe1dc92-d9c8-422c-8b3a-b0d79aa902e5', 'Communication', 'H.NO.1-1-151, STATION ROAD,', '584101');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cfe1dc92-d9c8-422c-8b3a-b0d79aa902e5', 'Permanent', '1-1-151,STATION ROAD', '584101');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a15794e7-7f7e-46f7-b0f9-11a0725463fb', 'CA/1980/05443', 'Mr', 'RAJIV RAJANIKANT', NULL, 'KULKARNI', 'Male', '1955-04-20', NULL, NULL, '1980-01-07', '2001-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a15794e7-7f7e-46f7-b0f9-11a0725463fb', 'Communication', '105 VEENA BEENA SHOPPING CENTRE, OPP.BANDRA RLY. STATION, BANDRA(WEST)', '400050');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a15794e7-7f7e-46f7-b0f9-11a0725463fb', 'Permanent', '105 VEENA BEENA SHOPPING CENTRE, OPP.BANDRA RLY. S', '400050');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bbf7f8a4-ccab-449d-a6b2-e11a33f2e941', 'CA/1980/05444', 'Mr', 'SURESH SHRIDHAR', NULL, 'KARJATKAR', 'Male', '1949-06-02', NULL, NULL, '1980-01-07', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bbf7f8a4-ccab-449d-a6b2-e11a33f2e941', 'Communication', 'SURESH KARJATKAR &amp; ASSOCIATES, ARCHITECTS, 19, 6TH CROSS,
LAKSHMI ROAD, SHANTHINAGAR,', '560027');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bbf7f8a4-ccab-449d-a6b2-e11a33f2e941', 'Permanent', 'SURESH KARJATKAR &amp; ASSOC, 21, RAJA RAM MOHAN ROY R', '560025');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('123db459-f4ad-4637-b8ad-3b87f70c2f45', 'CA/1980/05445', 'Mr', 'MOHAMMED YOUSUF', NULL, 'AHMED', 'Male', '1953-11-15', NULL, '8074701501', '1980-01-07', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('123db459-f4ad-4637-b8ad-3b87f70c2f45', 'Communication', 'H.NO-6-3-1219/1/7/A, KUNDAN BAGH, BEGUMPET', '500016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('123db459-f4ad-4637-b8ad-3b87f70c2f45', 'Permanent', 'H.NO.6-3-1219/7/A,KUNDAN BAGH,BEGUMPET', '500016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('70542212-bdc6-4c32-807b-e02cdc844aaa', 'CA/1980/05446', 'Mr', 'CHANDRAKISHOR B.', NULL, 'RAHATEKAR', 'Male', '1949-12-28', 'ar.rahatekar@gmail.com', '9822020611', '1980-01-07', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('70542212-bdc6-4c32-807b-e02cdc844aaa', 'Communication', 'INDRAPRASTHA, 3025/9, SENAPATI BAPAT ROAD, SHIVAJI NAGAR', '411016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('70542212-bdc6-4c32-807b-e02cdc844aaa', 'Permanent', 'INDRAPRASTHA, 3025/9 SENAPATI BAPAT ROAD, SHIVAJINAGAR, PUNE', '411016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2685a31a-e69e-478f-92c3-cc2fb52d9d4e', 'CA/1981/06086', 'Mr', 'SHRIKANT RANGANATH', NULL, 'SHIRVALKAR', 'Male', '1970-01-01', NULL, NULL, NULL, '2001-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2685a31a-e69e-478f-92c3-cc2fb52d9d4e', 'Communication', 'FLAT # 105 &quot;B&quot; WING VASA- NT PRAKASH COOP.HSG.SOC. 7 BUNGLOW ANDHERI(E)', '400053');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('af90a1ad-40fc-44bf-b426-ac260b9d091f', 'CA/1981/06087', 'Mr', 'YESHWANT CHAMPATRAO', NULL, 'GULHANE', 'Male', '1936-03-02', NULL, NULL, '1981-01-12', '1985-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('af90a1ad-40fc-44bf-b426-ac260b9d091f', 'Communication', '471, E-7, ARERA COLONY', '000000');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('af90a1ad-40fc-44bf-b426-ac260b9d091f', 'Permanent', '471, E-7, ARERA COLONY', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('470b8650-66c1-42aa-9a29-9556a025187b', 'CA/1981/06088', 'Mr', 'ASIMKUMAR', NULL, 'RAY', 'Male', '1931-11-26', NULL, NULL, '1981-01-12', '2004-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('470b8650-66c1-42aa-9a29-9556a025187b', 'Communication', '61 WILWOOD PARK R3T OC8', '000000');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('470b8650-66c1-42aa-9a29-9556a025187b', 'Permanent', '61 WILWOOD PARK R3T OC8', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1193cc24-6ba8-4e8f-bdca-808758dc4c87', 'CA/1981/06089', 'Mr', 'ANIS', NULL, 'AHMED', 'Male', '1954-02-09', NULL, NULL, NULL, NULL, 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1193cc24-6ba8-4e8f-bdca-808758dc4c87', 'Communication', 'Qtr.No.4, 2nd Street,', '620015');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1193cc24-6ba8-4e8f-bdca-808758dc4c87', 'Permanent', 'PROFESSOR DEPARTMENT OF ARCH. N.I.T.,TRICHY', '620015');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fb8f1b84-9c0c-446f-92a7-5858a8ab8a67', 'CA/1981/06090', 'Mr', 'V.', NULL, 'RAMPRASAD', 'Male', '1954-02-09', NULL, NULL, '1981-01-12', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fb8f1b84-9c0c-446f-92a7-5858a8ab8a67', 'Communication', 'DOOR NO.3/3000/A172/A, FLAT NO.1, 6TH FLOOR, SAI NIRMAN APARTMENT, K.N. PALLI ROAD', '515134');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fb8f1b84-9c0c-446f-92a7-5858a8ab8a67', 'Permanent', 'PROFESSOR DEPARTMENT OF ARCH. N.I.T.,TRICHY', '620015');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ce9d6b4d-f92c-486f-b39c-4f8456751a93', 'CA/1982/06719', 'Mr', 'RAMAN', NULL, 'KUMAR', 'Male', '1956-01-08', NULL, NULL, '1982-01-07', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ce9d6b4d-f92c-486f-b39c-4f8456751a93', 'Communication', 'JAI HIND COLONY,
RANIPUR ROAD,
PHULWARI SHARIF', '801505');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ce9d6b4d-f92c-486f-b39c-4f8456751a93', 'Permanent', 'DAUDPUR, LAXMI CHOWK', '842001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9553f6ef-6879-4ace-8ad6-8a786ae3cece', 'CA/1982/06721', 'Mr', 'VIPIN', NULL, 'GUPTA', 'Male', '1958-07-30', 'vipingupta_arch@rediffmail.com', '9810549923', '1982-01-07', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9553f6ef-6879-4ace-8ad6-8a786ae3cece', 'Communication', 'B-6, BHANOT APARTMENTS,
5, LOCAL SHOPPING CENTRE,
MADANGIR,', '110062');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9553f6ef-6879-4ace-8ad6-8a786ae3cece', 'Permanent', 'B-6 BHANOT APARTMENTS         5, LOCAL SHOPPING CENTRE, MADANGIR,', '110062');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2ceaf4ac-b24d-43d0-a664-8de558e0b682', 'CA/1982/06722', 'Mr', 'F.FAQRULLAH', NULL, 'KHAN', 'Male', '1954-01-11', NULL, NULL, '1982-01-07', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2ceaf4ac-b24d-43d0-a664-8de558e0b682', 'Communication', 'M/S.SHRINIVAS AND KHAN, ARCHITECTS,
NO.102, IST CROSS, VICTORIA LAYOUT,', '560047');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2ceaf4ac-b24d-43d0-a664-8de558e0b682', 'Permanent', 'SRINIVAS AND KHAN ARCH. NO.102,I CROSS VICTORIA LA', '560047');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b6b9f313-cd39-4dc2-bff2-728bc0cc1f27', 'CA/1982/06723', 'Mr', 'KEKA', NULL, 'BASU', 'Female', '1958-04-05', NULL, NULL, '1982-01-07', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b6b9f313-cd39-4dc2-bff2-728bc0cc1f27', 'Communication', 'E-12/30 DLF QUTAB ENCLAVE PHASE - I,', '122002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b6b9f313-cd39-4dc2-bff2-728bc0cc1f27', 'Permanent', 'E-12/30,DLF QUTAB ENCLAVE PHASE-I', '122002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('aaa8333f-1b3f-47b2-99da-b87fb3852afd', 'CA/1982/06724', 'Mr', 'OM', NULL, 'CHAND', 'Male', '1954-02-08', NULL, NULL, '1982-01-07', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aaa8333f-1b3f-47b2-99da-b87fb3852afd', 'Communication', 'H.NO.676, SECTOR-14', '121007');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aaa8333f-1b3f-47b2-99da-b87fb3852afd', 'Permanent', '117,M.I.G.-A, SECTOR 10', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('517c0f19-623f-4108-a57a-8a7b05180ffa', 'CA/1983/07325', 'Mr', 'ARUN KASHINATH', NULL, 'BADEKAR', 'Male', '1940-08-21', NULL, NULL, '1983-01-21', '2010-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('517c0f19-623f-4108-a57a-8a7b05180ffa', 'Communication', 'AT POST-MALVAN [REVTALA],', '416606');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('517c0f19-623f-4108-a57a-8a7b05180ffa', 'Permanent', '(33)19,10TH AVENUE ASHOK NAGAR', '600083');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('c8545526-3ba1-4fd8-8774-5875a2d7a5eb', 'CA/1983/07326', 'Mr', 'GOPA', NULL, 'SEN', 'Female', '1956-11-24', NULL, NULL, '1983-01-21', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c8545526-3ba1-4fd8-8774-5875a2d7a5eb', 'Communication', '539-A, BLOCK-N, NEW ALIPORE', '700053');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c8545526-3ba1-4fd8-8774-5875a2d7a5eb', 'Permanent', '539A,BLOCK-N,NEW ALIPORE', '700053');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('93ed9fe9-e366-48d8-bf47-68cf1ae70d87', 'CA/1983/07327', 'Mr', 'RAMESH RAOSAHEB', NULL, 'CHAVAN', 'Male', '1957-07-29', 'ar.ramesh.chavan@gmail.com', '9850759209', '1983-01-21', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('93ed9fe9-e366-48d8-bf47-68cf1ae70d87', 'Communication', 'SAHYADRI BUILDING, PLOT NO. 67,
FLAT NO.6, THIRD FLOOR, 
RIGHT BHUSARI COLONY,
KOTHRUD,PUNE.
NEAR NEW INDIA SCHOOL', '411038');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('93ed9fe9-e366-48d8-bf47-68cf1ae70d87', 'Permanent', 'SAHYADRI BUILDING, PLOT NO. 67,
FLAT NO.6, THIRD FLOOR, 
RIGHT BHUSARI COLONY,
KOTHRUD,PUNE.
NEAR NEW INDIA SCHOOL', '411038');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('46b3fcdb-3238-4fae-9ca5-22508cab3feb', 'CA/1983/07328', 'Mr', 'M.ARUNACHALA', NULL, 'HEGDE', 'Male', '1956-09-15', NULL, NULL, '1983-01-21', '1984-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('46b3fcdb-3238-4fae-9ca5-22508cab3feb', 'Communication', '`THOTH ARCHITECTS, 1878, 39TH CROSS, 11TH MAIN 4 `T BLOCK, JAYANAGAR', '560011');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('46b3fcdb-3238-4fae-9ca5-22508cab3feb', 'Permanent', '`THOTH  ARCHITECTS, 1878, 39TH CROSS, 11TH MAIN 4', '560011');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6166b97e-f012-46d5-b070-eab37bd48329', 'CA/1983/07329', 'Mr', 'AGNELO J.M.DE SOUSA', NULL, 'MARTINS', 'Male', '1945-08-25', NULL, NULL, '1983-01-21', '2002-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6166b97e-f012-46d5-b070-eab37bd48329', 'Communication', '366, MAHATMA GANDHI ROAD NEAR VYSYA BANK, PANJIM', '403001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6166b97e-f012-46d5-b070-eab37bd48329', 'Permanent', '366,MAHATMA GANDHI ROAD NEAR VYSA BANK PANJIM', '403001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('c22b7d87-c274-4240-8e7d-d838905337c9', 'CA/1984/07941', 'Mr', 'ARVIND BHALCHANDRA', NULL, 'NAIK', 'Male', '1959-06-29', NULL, NULL, '1984-01-24', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c22b7d87-c274-4240-8e7d-d838905337c9', 'Communication', 'B-20, KEVAL MAHAL,
MARINE DRIVE,', '400020');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c22b7d87-c274-4240-8e7d-d838905337c9', 'Permanent', 'B-20,KEVAL MAHAL MARINE DRIVE', '400020');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('91535ed7-f079-478b-9262-d88c865a4573', 'CA/1984/07942', 'Mr', 'PRABHAT', NULL, 'GUPTA', 'Male', '1959-10-29', 'prabhatg_associates@rediffmail.com', '9829065436', '1984-01-24', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91535ed7-f079-478b-9262-d88c865a4573', 'Communication', '109, KESHAV VIHAR, GOPAL PURA BYEEPASS,', '302018');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91535ed7-f079-478b-9262-d88c865a4573', 'Permanent', 'PRABHAT GUPTA & ASSO. 204,NAVJEEVAN CHAMBERS VINOBA MARG C SCHEME', '302001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('346aa800-41ad-4b51-ae74-499ad3006505', 'CA/1984/07943', 'Mr', 'BHARAT', NULL, 'MULAY', 'Male', '1959-08-11', 'bharatmulay@yahoo.com', '9175108877', '1984-01-24', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('346aa800-41ad-4b51-ae74-499ad3006505', 'Communication', 'A3-806, KUMAR PALMCREST, 
KHADI MACHINE CHOWK TO PISOLI ROAD,ADJACENT LANE TO KENZO FURNITURE STUDIO', '411048');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('346aa800-41ad-4b51-ae74-499ad3006505', 'Permanent', 'A3-806, KUMAR PALMCREST, KHADI MACHINE CHOWK TO PISOLI ROAD, PUNE.', '411048');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a4b04e41-3115-4dc0-9819-c318e7d05bd5', 'CA/1984/07944', 'Mr', 'RABINDRA LAKSHMASHI', NULL, 'MALDE', 'Male', '1955-08-21', NULL, NULL, '1984-01-24', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a4b04e41-3115-4dc0-9819-c318e7d05bd5', 'Communication', 'D-102, SHALIMAR APARTMENTS, TAGORE ROAD, SANTACRUZ WEST', '400054');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a4b04e41-3115-4dc0-9819-c318e7d05bd5', 'Permanent', '29 VEENA BEENA SHOPPING CENTRE,GURU NANAK ROAD. OP', '400050');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6bc22504-0977-4bf7-acc9-7a5304742d15', 'CA/1984/07945', 'Mr', 'ANJALI P.', NULL, 'DESHPANDE', 'Female', '1958-04-19', NULL, NULL, '1984-01-24', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6bc22504-0977-4bf7-acc9-7a5304742d15', 'Communication', '&#039;SUCCESS TOWERS&#039;, FLAT NO.1003,
BUILDING F-1, STATE BANK NAGAR CO.OP. HOUSING SOCIETY, PANCHAVATI,
SUS ROAD, PASHAN,', '411008');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6bc22504-0977-4bf7-acc9-7a5304742d15', 'Permanent', '538, NARAYAN PETH', '411030');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('90c291c7-f1f9-4b45-ab4c-2fd159cfed6d', 'CA/1985/08826', 'Mr', 'MAHESHKUMAR MOHANLAL', NULL, 'VORA', 'Male', '1953-07-14', NULL, NULL, '1985-01-31', '1988-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90c291c7-f1f9-4b45-ab4c-2fd159cfed6d', 'Communication', 'A-11/14,URMI APARTMENTS OPP.CONVENT SCHOOL FATEHGUNJ', '390002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90c291c7-f1f9-4b45-ab4c-2fd159cfed6d', 'Permanent', 'A-11/14,URMI APARTMENTS OPP.CONVENT SCHOOL FATEHGU', '390002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('26c322b0-53de-4aa3-bef4-ebd1960a580d', 'CA/1985/08827', 'Mr', 'RENU', NULL, 'SINGHAL', 'Female', '1954-09-14', NULL, '9866263164', '1985-01-31', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('26c322b0-53de-4aa3-bef4-ebd1960a580d', 'Communication', 'FLAT-402,4th FLOOR SUHAG PALACE ROAD NO.12 BANJARA HILLS', '500034');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('26c322b0-53de-4aa3-bef4-ebd1960a580d', 'Permanent', 'FLAT-402,4th FLOOR SUHAG PALACE ROAD NO.12 BANJARA HILLS', '500034');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('aabd8b5a-ea17-4c51-bd01-129e6b95b531', 'CA/1985/08828', 'Mr', 'CHANDRAMOHAN TRIMBAK', NULL, 'VAIDYA', 'Male', '1946-09-16', NULL, NULL, '1985-01-31', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aabd8b5a-ea17-4c51-bd01-129e6b95b531', 'Communication', 'BLDG. NO.44A, FLAT NO.42, BRINDAVAN SOCIETY, THANE[W]', '400601');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aabd8b5a-ea17-4c51-bd01-129e6b95b531', 'Permanent', 'BLDG.NO.44A,FLAT NO.42 BRINDAVAN SOCIETY', '400601');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cc8f22ee-e755-45de-ae5b-16a4341bed29', 'CA/1985/08829', 'Mr', 'LESLIE P.E.', NULL, 'ALMEIDA', 'Male', '1952-07-31', NULL, NULL, '1985-01-31', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cc8f22ee-e755-45de-ae5b-16a4341bed29', 'Communication', 'ALMEIDA HOUSE,B/H ABREU NIKETAN, 5TH CROSS RD., I.C. COLONY,BORIVLI(WEST)', '400103');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cc8f22ee-e755-45de-ae5b-16a4341bed29', 'Permanent', '16-ABREU NIKETAN 7TH FLOOR,I.C.COLONY BORIVLI(WEST', '400103');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d75fdc42-ee75-4ebc-a12e-11c7640c8890', 'CA/1985/08830', 'Mr', 'B.S.', NULL, 'SHADAKSHARASWAMY', 'Male', '1958-06-19', 'swamyarch@yahoo.com', NULL, '1985-01-31', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d75fdc42-ee75-4ebc-a12e-11c7640c8890', 'Communication', 'M/S.SWAMY & ASSOCIATES,
NO.34, 2ND FLOOR, SF-3, SURYA APARTMENT, SRIKANTAIAH LAYOUT, CRESCENT ROAD, HIGH GROUNDS', '560001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d75fdc42-ee75-4ebc-a12e-11c7640c8890', 'Permanent', 'NO.7, 3RD CROSS N.S.IYENGAR STREET SHESHADRIPURAM', '560020');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('48df55a7-a3b1-4237-819c-700669f46896', 'CA/1986/09578', 'Mr', 'ASHWINI ARVIND', NULL, 'BHORKAR', 'Female', '1955-08-24', NULL, NULL, '1986-01-12', '1998-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('48df55a7-a3b1-4237-819c-700669f46896', 'Communication', '22 MONALISA SOCIETY TANDUL BAZAR ROAD BHANU NAGAR,DOMBIVLI(E)', '421201');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('48df55a7-a3b1-4237-819c-700669f46896', 'Permanent', '22 MONALISA BUILDING TANDUL BAZAR ROAD BHANU NAGAR', '421201');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e6ea6430-644c-47c0-9eb0-4d6421c0fdc5', 'CA/1986/09579', 'Mr', 'NITEEN SHASHIKANT', NULL, 'RANADE', 'Male', '1963-06-13', NULL, '9420068485', '1986-01-12', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e6ea6430-644c-47c0-9eb0-4d6421c0fdc5', 'Communication', 'Aoudumbar, S.No.17/4, near Z.P. Primary School, Kolewadi (Ambegaon Kh), Pune.', '411046');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e6ea6430-644c-47c0-9eb0-4d6421c0fdc5', 'Permanent', '203, SAMVED ,637-B SHIVAJI NAGAR,BESIDES HOTEL RUT', '411004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5c284716-7b24-4183-80da-0b1a8c699a74', 'CA/1986/09580', 'Mr', 'RAVINDRA GANPATRAO', NULL, 'SAVANT', 'Male', '1960-09-17', 'arrgsavant@gmail.com', '9422044389', '1986-01-12', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5c284716-7b24-4183-80da-0b1a8c699a74', 'Communication', 'INDIRA GANPATI NIWAS, PLOT NO.11,  C.S. NO. 825, SAHJEEVAN PARISAR,  BEHIND CIRCUIT HOUSE, TARABAI PARK', '416003');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5c284716-7b24-4183-80da-0b1a8c699a74', 'Permanent', 'B-8, RAJ MOTI APARTMENT SHIVAJI PARK', '416001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ad655178-48ca-473c-b4af-ae89a4aa7102', 'CA/1986/09581', 'Mr', 'SMITA VASANT', NULL, 'CHOTALIA', 'Female', '1948-02-11', NULL, NULL, '1986-01-12', '2014-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ad655178-48ca-473c-b4af-ae89a4aa7102', 'Communication', 'A/3, KRISHNA C.H.S., OPP. ISKCON TEMPLE, JUHU CHURCH ROAD, JUHU,', '400049');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ad655178-48ca-473c-b4af-ae89a4aa7102', 'Permanent', '22, NAVYUG SOCIETY ANAND BHAVAN,JUHU SCHEME VILE P', '400056');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d31b0478-1f28-4da3-8377-4a22a283615e', 'CA/1986/09582', 'Mr', 'JUNE ROY', NULL, 'GHATAK', 'Female', '1946-06-09', NULL, NULL, '1986-01-12', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d31b0478-1f28-4da3-8377-4a22a283615e', 'Communication', '14, BALLYGUNGE GARDENS', '700019');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d31b0478-1f28-4da3-8377-4a22a283615e', 'Permanent', 'C/O.B.ROY GHATAK ANSAL HOUSING,U.G.F.INDRA PRAKASH', '110001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('956ab388-1b09-4f9f-9829-0216b88e678b', 'CA/1987/0011265', 'Mr', 'PRASHANT SHANTARAM', NULL, 'CHAMANKAR', 'Male', '1964-06-08', 'prashantchamankar@gmail.com', '9820320852', NULL, '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('956ab388-1b09-4f9f-9829-0216b88e678b', 'Communication', 'A-901, ADITI CO.OP. HSG. SCTY.,
OPP.VERSOVA TELEPHONE EXCHANGE,
4 BUNGLOWS, S.V.P.NAGAR, MHADA,
ANDHERI WEST,', '400053');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('956ab388-1b09-4f9f-9829-0216b88e678b', 'Permanent', 'A-901, ADITI CO.OP. HSG. SCTY.,
OPP.VERSOVA TELEPHONE EXCHANGE,
4 BUNGLOWS, S.V.P.NAGAR, MHADA,
ANDHERI WESt,', '400053');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('4a502af9-e072-481a-a05e-4ec0ee030ed0', 'CA/1987/10401', 'Mr', 'MOHAN JANARDAN', NULL, 'RANADE', 'Male', '1960-01-13', NULL, NULL, '1987-01-11', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('4a502af9-e072-481a-a05e-4ec0ee030ed0', 'Communication', 'FLAT NO-9,JANHAVI APTS. 40/22 BHONDE COLONY NR. KARNATAK HIGH SCHOOL (OLD), ERANDAVANA', '411004');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('4a502af9-e072-481a-a05e-4ec0ee030ed0', 'Permanent', 'FLAT NO-9, JANHAVI  APTS. 40/22 BHONDE COLONY ERAN', '411004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('85253fc9-a345-4fb2-a2b7-7f84b59af364', 'CA/1987/10402', 'Mr', 'J.S.', NULL, 'GOPINATH', 'Male', '1961-06-19', NULL, NULL, '1987-01-11', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('85253fc9-a345-4fb2-a2b7-7f84b59af364', 'Communication', '# 201, SREENIDHI TOWERS, 8-3-988/25, S.B.H.COLONY, 
SRINAGAR COLONY,', '500073');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('85253fc9-a345-4fb2-a2b7-7f84b59af364', 'Permanent', '201,SREENIDHI TOWERS S.B.H.COLONY,8-3-988/25, 26,2', '500073');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f8830ae2-c7e1-43c3-a01e-c27f6451910f', 'CA/1987/10403', 'Mr', 'Daulat', NULL, 'Dharmani', 'Male', '1960-10-16', 'sparklearchitects@rediffmail.com', '9822344261', '1987-01-11', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f8830ae2-c7e1-43c3-a01e-c27f6451910f', 'Communication', 'SPARKLE ARCHITECTS, OFFICE NO.48,
2ND FLOOR, SUKHWANI CHAMBERS,
STATION ROAD, PIMPRI,', '411018');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f8830ae2-c7e1-43c3-a01e-c27f6451910f', 'Permanent', 'Sparkle archhitects,48,2nd floor,Sukhwani Chambers,station road,pimpri,Pune -18', '411018');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0e56ec99-0cd9-40a6-9da6-6744452d1cc8', 'CA/1987/10405', 'Mr', 'BISWARANJAN', NULL, 'NAYAK', 'Male', '1962-02-15', NULL, NULL, '1987-01-11', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0e56ec99-0cd9-40a6-9da6-6744452d1cc8', 'Communication', 'CHIEF ARCHITECT, ODISHA, NIRMAN SOUDHA, UNIT-V', '753001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0e56ec99-0cd9-40a6-9da6-6744452d1cc8', 'Permanent', 'Chief Architect, Level II, PWD, Nirman Soudha, Phase II, Unit V', '753001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1a5eac6c-3fc3-483e-8668-615e81ef8791', 'CA/1988/11290', 'Mr', 'MOHAMMED', NULL, 'ASLAM', 'Male', '1961-04-19', NULL, NULL, '1988-01-17', '2008-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1a5eac6c-3fc3-483e-8668-615e81ef8791', 'Communication', 'P.T.S.BUILDINGS,
MINAR LANE,
PERINTHALMANNA,', '679322');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1a5eac6c-3fc3-483e-8668-615e81ef8791', 'Permanent', 'ASLAM ASSO.,P.T.S.BLDG. MINAR LANE,CALICUT ROAD PE', '679321');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('91d36a2c-1675-49cf-b466-e4f36505150a', 'CA/1988/11291', 'Mr', 'PERVEZ', NULL, 'NASEER', 'Male', '1946-04-07', NULL, NULL, '1988-01-17', '1997-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91d36a2c-1675-49cf-b466-e4f36505150a', 'Communication', '52/25 B.MUIR ROAD', '211202');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91d36a2c-1675-49cf-b466-e4f36505150a', 'Permanent', '52/25 B.MUIR ROAD', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5558da26-97f1-441c-8240-acbaf5ee71f9', 'CA/1988/11292', 'Mr', 'INDRAJIT', NULL, 'SEN', 'Male', '1961-03-08', NULL, NULL, '1988-01-17', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5558da26-97f1-441c-8240-acbaf5ee71f9', 'Communication', '171, JODHPUR PARK,', '700068');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5558da26-97f1-441c-8240-acbaf5ee71f9', 'Permanent', 'O/O.CHIEF ARCHITECT C.P.W.D.,NIZAM PALACE 234/4,A.', '700020');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('03148503-332b-4018-a60e-b56592e9375d', 'CA/1988/11293', 'Mr', 'PREETI', NULL, 'CHOPRA', 'Female', '1961-12-06', NULL, NULL, '1988-01-17', '2009-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('03148503-332b-4018-a60e-b56592e9375d', 'Communication', 'A-701, SOM VIHAR APTS, OPP. SANGAM THEATRE, R.K. PURAM', '110022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('03148503-332b-4018-a60e-b56592e9375d', 'Permanent', 'A-701,SOM VIHAR APTS. OPP.SANGAM THEATRE R.K.PURAM', '110022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cbad986f-773c-4eb5-abd5-2bece0f6da3a', 'CA/1988/11294', 'Mr', 'AJOG KUMAR', NULL, 'BOSE', 'Male', '1954-06-27', NULL, NULL, '1988-01-17', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cbad986f-773c-4eb5-abd5-2bece0f6da3a', 'Communication', '38, MAITRI APARTMENT,A-3, PASCHI VIHAR', '110063');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cbad986f-773c-4eb5-abd5-2bece0f6da3a', 'Permanent', '3,GROUND FLOOR PLOT-34,NORTH AVENUE PUNJABI BAGH W', '110026');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3fdf728d-42f5-4eb5-8c28-df421a156d75', 'CA/1989/11972', 'Mr', 'MILIND GUNPAL', NULL, 'LADGE', 'Male', '1959-04-11', NULL, NULL, '1989-01-16', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fdf728d-42f5-4eb5-8c28-df421a156d75', 'Communication', 'PLOT NO.39, PUSHPAGUN,  MAHADIK COLONY, VASAHAT', '416005');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fdf728d-42f5-4eb5-8c28-df421a156d75', 'Permanent', 'TRADE CENTER, STATION ROAD,SHAHUPURI,', '416001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('81d45df2-172a-48f0-a97a-61e1d3168548', 'CA/1989/11973', 'Mr', 'P.', NULL, 'ASOKAN', 'Male', '1964-04-19', 'artearchitects@gmail.com', NULL, '1989-01-16', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('81d45df2-172a-48f0-a97a-61e1d3168548', 'Communication', 'ASOK ASSOCIATES,
MAJESTIC CENTERE,
BMH JUCTION, CALICAT', '673004');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('81d45df2-172a-48f0-a97a-61e1d3168548', 'Permanent', 'ART ARCHITECTS ,6/530 MA BAZAR, BANK ROAD', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2b0b2274-3811-43fd-bc49-fa2d529a5509', 'CA/1989/11974', 'Mr', 'AVINASH PURSHOTTAM', NULL, 'NAWATHE', 'Male', '1958-02-09', 'avinashnawathe@yahoo.co.in', '9822056652', '1989-01-16', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2b0b2274-3811-43fd-bc49-fa2d529a5509', 'Communication', 'FLAT NO. 802, SHR NO 11/4 A GEMINI RIVER FRONT NR. ROHAN NILAY PHASE-II', '411007');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2b0b2274-3811-43fd-bc49-fa2d529a5509', 'Permanent', '1132/3,`VISHNUDARSHAN  FERGUSSON COLLEGE ROAD SHIV', '411016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('61e2f58e-63f9-4d81-85d1-01839c4a22e2', 'CA/1989/11975', 'Mr', 'MAHENDRA', NULL, 'KUMAR', 'Male', '1936-10-19', NULL, NULL, '1989-01-16', '2008-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('61e2f58e-63f9-4d81-85d1-01839c4a22e2', 'Communication', 'MAHENDRA &amp; COLLABORATORS, 1 PATEL CHOWK,', '180001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('61e2f58e-63f9-4d81-85d1-01839c4a22e2', 'Permanent', 'MAHENDRA &amp; COLLABORATORS, 1 PATEL CHOWK,', '180001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('c2ff2a22-11c7-4b32-9426-acb8c175d5be', 'CA/1989/11976', 'Mr', 'JAIDEEP', NULL, 'CHAKRABARTI', 'Male', '1963-08-11', NULL, NULL, '1989-01-16', '2001-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c2ff2a22-11c7-4b32-9426-acb8c175d5be', 'Communication', 'M-28, VIKAS PURI', '110018');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('c2ff2a22-11c7-4b32-9426-acb8c175d5be', 'Permanent', 'M-28, VIKAS PURI', '110018');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a2b7e6ea-cbef-4266-8f52-892158a46e7b', 'CA/1990/12769', 'Mr', 'KHUSHPREET', NULL, '', 'Female', '1966-04-19', NULL, '9999865558', '1990-01-14', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a2b7e6ea-cbef-4266-8f52-892158a46e7b', 'Communication', '25/1202, NRI COMPLEX, SEAWOODS, ESTATES, SEC.-55/56/58, NERUL', '400706');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a2b7e6ea-cbef-4266-8f52-892158a46e7b', 'Permanent', 'B-72,SUNDER APARTMENTS POCKET GH-10 PASCHIM VIHAR', '110063');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1ca01f63-0aef-4441-8b3d-a0a9f40ac049', 'CA/1990/12770', 'Mr', 'BHARTI', NULL, 'SAHGAL', 'Female', '1966-10-21', NULL, NULL, '1990-01-14', '2000-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1ca01f63-0aef-4441-8b3d-a0a9f40ac049', 'Communication', 'A-26/12A, F.F.02 DLF QUTAB ENCLAVE PHASE-I', '122002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1ca01f63-0aef-4441-8b3d-a0a9f40ac049', 'Permanent', '1155, VIKAS KUNJ VIKAS PURI', '110018');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('65645904-d2f2-4e72-9c51-09972f4602c6', 'CA/1990/12771', 'Mr', 'ANIL KUMAR', NULL, 'GROVER', 'Male', '1966-07-10', NULL, NULL, '1990-01-14', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('65645904-d2f2-4e72-9c51-09972f4602c6', 'Communication', '266, SFS FLATS, MUKHERJEE NAGAR', '110009');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('65645904-d2f2-4e72-9c51-09972f4602c6', 'Permanent', '266,SFS FLATS MUKHERJI NAGAR', '110009');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('68fbc463-226f-457e-9c02-9540760f969a', 'CA/1990/12772', 'Mr', 'VISHAL', NULL, 'AGGARWAL', 'Male', '1966-12-20', 'brickbyb@hotmail.com', NULL, '1990-01-14', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('68fbc463-226f-457e-9c02-9540760f969a', 'Communication', '7223, DLF PHASE IV,', '122002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('68fbc463-226f-457e-9c02-9540760f969a', 'Permanent', 'EB/189, G-8 AREA MAYA ENCLAVE HARI NAGAR', '110064');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('55491aa5-1aa3-4856-a611-46663c75b514', 'CA/1990/12773', 'Mr', 'RAHUL', NULL, 'VATSYAYAN', 'Male', '1966-01-19', NULL, NULL, '1990-01-14', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('55491aa5-1aa3-4856-a611-46663c75b514', 'Communication', 'H.NO.14, NATIONAL MEDIA CENTRE,
SHANKAR CHOWK,', '122002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('55491aa5-1aa3-4856-a611-46663c75b514', 'Permanent', 'THE COMBINE D-7 EAST OF KAILASH', '110065');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9e224cf3-4277-44b8-b004-6a8d1423aa25', 'CA/1991/13591', 'Mr', 'SUBRAMANIAN', NULL, 'RAMASWAMY', 'Male', '1959-04-02', NULL, NULL, '1991-01-14', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9e224cf3-4277-44b8-b004-6a8d1423aa25', 'Communication', 'F-2, 1ST FLOOR, LAKSHMI SAROJA RESIDENCY, 73/106, THIRUVALLUVAR STREET', '600059');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9e224cf3-4277-44b8-b004-6a8d1423aa25', 'Permanent', 'C/O BHARATH &amp; ASSOCIATES THE POLYGON 141 ANNA SALA', '600015');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9af390ee-532c-4b2b-b585-e0881f6ab878', 'CA/1991/13592', 'Mr', 'BHARAT BHUSHAN', NULL, 'GUPTA', 'Male', '1963-03-17', 'bhushanb571@gmail.com', '8287240535', '1991-01-14', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9af390ee-532c-4b2b-b585-e0881f6ab878', 'Communication', '56A LIG FLATS, MAYAPURI, OPPOSITE PRESS COLONY, MAYAKUNJ,', '110064');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9af390ee-532c-4b2b-b585-e0881f6ab878', 'Permanent', '56-A L.I.G.FLATS MAYAPURI,OPP PRESS COLONY', '110064');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0d6fc984-3aa5-4fe3-bdbc-2d72afae832b', 'CA/1991/13593', 'Mr', 'S.', NULL, 'BALASUBRAMANIAN', 'Male', '1955-04-10', NULL, NULL, '1991-01-14', '1992-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d6fc984-3aa5-4fe3-bdbc-2d72afae832b', 'Communication', 'MAIN ROAD VELLI THIRUPPUR', '638325');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d6fc984-3aa5-4fe3-bdbc-2d72afae832b', 'Permanent', 'MAIN ROAD VELLI THIRUPPUR', '638325');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('43832c1c-b125-4928-a1fb-fdce6293ce67', 'CA/1991/13594', 'Mr', 'BHANUMATHY', NULL, 'PREM', 'Female', '1959-05-28', NULL, NULL, '1991-01-14', '2021-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('43832c1c-b125-4928-a1fb-fdce6293ce67', 'Communication', 'M-573, NEW NO.8, 26TH CROSS STREET, THIRUVALLUVAR NAGAR, THIRUVANMIYUR,', '600041');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('43832c1c-b125-4928-a1fb-fdce6293ce67', 'Permanent', 'M-573, 26TH CROSS ROAD THIRUVALLUVAR NAGAR TIRUVAN', '600041');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('8576942b-b66b-4361-8cd3-4e571324e3be', 'CA/1991/13595', 'Mr', 'MANJULA', NULL, 'KANSAL', 'Female', '1958-06-25', NULL, NULL, '1991-01-14', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8576942b-b66b-4361-8cd3-4e571324e3be', 'Communication', 'H.NO.A-73, 1ST FLOOR,
ASHOKA ENCLAVE, PART-II, SECTOR-37,', '121003');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8576942b-b66b-4361-8cd3-4e571324e3be', 'Permanent', '360,SECTOR 17', '121002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9d2137ec-f9d6-43c7-a7ed-eb70e5927638', 'CA/1992/14426', 'Mr', 'AMIT', NULL, 'HAJELA', 'Male', '1966-02-25', 'arhajela@gmail.com', '9810170496', '1991-12-31', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9d2137ec-f9d6-43c7-a7ed-eb70e5927638', 'Communication', 'D-202,VIDISHA APTS. 79,I.P.EXTENSION', '110092');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9d2137ec-f9d6-43c7-a7ed-eb70e5927638', 'Permanent', 'D-202,VIDISHA APTS. 79,I.P.EXTENSION', '110092');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d4d34dde-aff0-48bb-8c55-45646cdd6ff7', 'CA/1992/14427', 'Mr', 'SEEMA', NULL, 'AMBASTHA', 'Female', '1967-04-11', NULL, NULL, '1991-12-31', '2012-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d4d34dde-aff0-48bb-8c55-45646cdd6ff7', 'Communication', 'ARCHITECTURAL SECTION IST FLOOR, A&amp;CED (NORTH SITE), BARC, TROMBAY', '400085');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d4d34dde-aff0-48bb-8c55-45646cdd6ff7', 'Permanent', 'DY.ARCH.,HEADQUARTERS CHIEF ENG.NAVY MUMBAI 26,ASS', '400005');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fdc455f1-e6bc-449f-8920-3f047f485f0c', 'CA/1992/14428', 'Mr', 'MANOJ KUMAR', NULL, 'SINGH', 'Male', '1966-01-01', 'mk1256pat@yahoo.co.in', '9471007114', '1991-12-31', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fdc455f1-e6bc-449f-8920-3f047f485f0c', 'Communication', '201 LOCHAN ENCLAVE , Lohianagar  Kankarbagh Patna-800020 BIHAR', '800020');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fdc455f1-e6bc-449f-8920-3f047f485f0c', 'Permanent', 'Senior . Architect  BSNL ,3rd  FLOOR CTO Building Budha Marg Patna -800001 Bihar', '800001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3fce2386-b8b6-44ab-84d6-8b7f1ebdea46', 'CA/1992/14429', 'Mr', 'CHARULATA', NULL, 'GUPTA', 'Female', '1967-06-02', NULL, NULL, '1991-12-31', '1999-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fce2386-b8b6-44ab-84d6-8b7f1ebdea46', 'Communication', 'HIG-79, HUDCO AMDI NAGAR', '490006');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fce2386-b8b6-44ab-84d6-8b7f1ebdea46', 'Permanent', 'HIG-79, HUDCO AMDI NAGAR', '490006');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('83e57f0f-78e3-40ae-9fca-9b7125206fab', 'CA/1992/14430', 'Mr', 'SAMPAN', NULL, 'SABHARWAL', 'Male', '1969-02-10', NULL, NULL, '1991-12-31', '2019-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('83e57f0f-78e3-40ae-9fca-9b7125206fab', 'Communication', 'A-94, Sector-49,', '201301');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('83e57f0f-78e3-40ae-9fca-9b7125206fab', 'Permanent', 'C/O.VADEHRA S D-40,DEFENCE COLONY', '110024');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('dc074244-f4c1-458e-b8a5-cf90a5299ed1', 'CA/1993/15531', 'Mr', 'RAJAT', NULL, 'SONI', 'Male', '1969-12-14', 'RAJAT_SONI@YAHOO.COM', '9893019004', '1992-12-31', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('dc074244-f4c1-458e-b8a5-cf90a5299ed1', 'Communication', 'M - 207, Gautam Nagar, Govindpura', '462023');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('dc074244-f4c1-458e-b8a5-cf90a5299ed1', 'Permanent', 'M - 207, Gautam Nagar, Govindpura', '462023');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bb741f21-8b6e-41e1-82d3-698dc5e22fe6', 'CA/1993/15532', 'Mr', 'P.', NULL, 'RAJAPRAKASH', 'Male', '1965-09-01', NULL, NULL, '1992-12-31', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bb741f21-8b6e-41e1-82d3-698dc5e22fe6', 'Communication', 'FLAT NO.11, IIND FLOOR, S.P.A. RESIDENTIAL COMPLEX, TAIMOOR NAGAR, MAHARANI BAGH.', '110065');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bb741f21-8b6e-41e1-82d3-698dc5e22fe6', 'Permanent', 'LECTURER, ARCHITECTURE DEPARTMENT S.P.A,4 BLOCK B,', '110002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2684d068-8c8f-4d18-9b91-89bf8d6b1c8f', 'CA/1993/15533', 'Mr', 'L.', NULL, 'VENKATESH', 'Male', '1967-07-29', 'lnvnkt@gmail.com', NULL, '1992-12-31', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2684d068-8c8f-4d18-9b91-89bf8d6b1c8f', 'Communication', '4 4TH CROSS STREET, CIT COLONY, MYLAPORE,', '600004');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2684d068-8c8f-4d18-9b91-89bf8d6b1c8f', 'Permanent', '5 KARPAGAMBAL NAGAR LUZ,MYLAPORE', '600004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ea62515c-b1e2-4315-9987-f31993bf41ec', 'CA/1993/15534', 'Mr', 'Rakhi', NULL, 'Taparia', 'Female', '1968-06-17', NULL, NULL, '1992-12-31', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ea62515c-b1e2-4315-9987-f31993bf41ec', 'Communication', 'D-40 FF, PEDESTAL , D-BLOCK, BPTP  ASTAIRE GARDEN, SECTOR-70A,', '122101');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ea62515c-b1e2-4315-9987-f31993bf41ec', 'Permanent', 'RATHI BROS  DELHI 8/4 D.B.GUPTA ROAD PAHARGANJ', '110055');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e10dc53b-be09-4b30-86be-c12b5c050a3b', 'CA/1993/15535', 'Mr', 'RAJUL ASHWIN', NULL, 'SHAH', 'Female', '1946-04-17', NULL, NULL, '1992-12-31', '2010-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e10dc53b-be09-4b30-86be-c12b5c050a3b', 'Communication', '121, M.G.  ROAD,', '400023');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e10dc53b-be09-4b30-86be-c12b5c050a3b', 'Permanent', '121,M.G.ROAD', '400023');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('39f4ce7b-9156-4fbc-b0e2-f166bd8b9406', 'CA/1994/16710', 'Mr', 'MALLIKA', NULL, 'KUMAR', 'Female', '1966-09-14', NULL, NULL, '1994-01-09', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('39f4ce7b-9156-4fbc-b0e2-f166bd8b9406', 'Communication', 'B5/22, SAFDARJUNG ENCLAVE', '110029');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('39f4ce7b-9156-4fbc-b0e2-f166bd8b9406', 'Permanent', 'C-9/9250,VASANT KUNJ', '110070');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1d585f70-d0a7-483e-a91f-a11d45202fff', 'CA/1994/16711', 'Mr', 'ARVINDER SINGH', NULL, 'NANRA', 'Male', '1968-02-07', NULL, NULL, '1994-01-09', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1d585f70-d0a7-483e-a91f-a11d45202fff', 'Communication', 'EB-98, G-8 AREA, MAYA ENCLAVE,', '110064');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1d585f70-d0a7-483e-a91f-a11d45202fff', 'Permanent', 'EB-98,G-8 AREA MAYA ENCLAVE', '110064');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0b424b28-c87d-467d-8270-ec9d4c04e09e', 'CA/1994/16712', 'Mr', 'JEEVAN', NULL, 'BABU S.', 'Male', '1967-08-11', NULL, NULL, '1994-01-09', '2019-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0b424b28-c87d-467d-8270-ec9d4c04e09e', 'Communication', '261, 5TH MAIN Road, VIVEK NAGAR,', '560047');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0b424b28-c87d-467d-8270-ec9d4c04e09e', 'Permanent', '336 7TH MAIN IIIRD CROSS VIVEK NAGAR', '560047');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a087bd84-9a12-4e56-8973-fa213b984df9', 'CA/1994/16713', 'Mr', 'S.', NULL, 'VIVEKANANDAN', 'Male', '1971-05-24', NULL, '7824032663', '1994-01-09', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a087bd84-9a12-4e56-8973-fa213b984df9', 'Communication', '4A, AC-12, 2ND AVENUE, ANNA NAGAR', '600040');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a087bd84-9a12-4e56-8973-fa213b984df9', 'Permanent', '25/9, BUDDHAR SCHOOL STREET,BODINAYAKANUR', '626513');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f39b7bd8-b784-4ebc-a122-1626d3d2dad9', 'CA/1994/16714', 'Mr', 'B.', NULL, 'SUDHIR', 'Male', '1969-05-31', NULL, NULL, '1994-01-09', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f39b7bd8-b784-4ebc-a122-1626d3d2dad9', 'Communication', 'ARCHITECTS CONSORTIUM, TC 24/245[3], G 8 GALLERY, OPP. GOVT.L.P. SCHOOL, POUND COLONY ROAD, THYCACD,', '695014');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f39b7bd8-b784-4ebc-a122-1626d3d2dad9', 'Permanent', 'TC 9/1234,KUNNIL COMPOUND SASTHAMANGALAM', '695010');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3b60432f-f1f0-4f4e-a564-1ca3e38d8f46', 'CA/1995/17961', 'Mr', 'SUNIL JIWANDHARRAO', NULL, 'SAWALKAR', 'Male', '1959-09-15', NULL, NULL, '1995-01-01', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3b60432f-f1f0-4f4e-a564-1ca3e38d8f46', 'Communication', 'PLOT NO.12, SUDHANKIT, SHRI KRISHNA VIHAR, BORKUTE LAYOUT, NARENDRA NAGAR', '440015');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3b60432f-f1f0-4f4e-a564-1ca3e38d8f46', 'Permanent', 'MUDRA COMPLEX MODI NO-3,SITABURDI', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('16590223-95d5-467f-b173-bbf92389c237', 'CA/1995/17962', 'Mr', 'NEMISH', 'MEHENDRA', 'SHAH', 'Male', '1972-09-13', 'shahnem@yahoo.com', '9892267235', '1995-01-01', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('16590223-95d5-467f-b173-bbf92389c237', 'Communication', '501/502-A Palm Springs, 
R M Bhattad Road, Kora Kendra
Borivali West.', '400092');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('16590223-95d5-467f-b173-bbf92389c237', 'Permanent', '501/502-A Palm Springs, 
R M Bhattad Road, Kora Kendra
Borivali West.', '400092');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('33b676c0-2268-4ee1-9a8a-2c5bed47c599', 'CA/1995/17963', 'Mr', 'MICHAEL P.', NULL, 'LEWIS', 'Male', '1947-03-17', NULL, NULL, '1995-01-01', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('33b676c0-2268-4ee1-9a8a-2c5bed47c599', 'Communication', 'SEA GLIMPSE,Ist FLOOR, WALTON ROAD', '400039');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('33b676c0-2268-4ee1-9a8a-2c5bed47c599', 'Permanent', 'M.P.LEWIS &amp; ASSOCIATES SEA GLIMPSE,WALTON ROAD', '400039');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5b2868ec-3831-4422-b07d-3c6f8eaa380a', 'CA/1995/17964', 'Mr', 'VANGALA LAKSHMI NARASIMHA', NULL, 'SHARMA', 'Male', '1967-01-06', NULL, NULL, '1995-01-01', '2006-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5b2868ec-3831-4422-b07d-3c6f8eaa380a', 'Communication', 'flat no:202, 5-253&amp;254/ve/202,
Viswam Elite Apartments,
Deepthisri Nagar Colony,
Madheenaguda,', '500049');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5b2868ec-3831-4422-b07d-3c6f8eaa380a', 'Permanent', 'FLAT NO-8,PLOT NO-61 SIDDHARTA APARTMENTS SIDHARTH', '500038');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('807f05a2-34b9-489a-9efb-b107d7f47809', 'CA/1995/17965', 'Mr', 'PRABHAKARAN', NULL, 'B.', 'Male', '1942-04-27', NULL, NULL, '1995-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('807f05a2-34b9-489a-9efb-b107d7f47809', 'Communication', 'FREEM HOUSE, KP-II/575, NEAR THENNUR SASTHA TEMPLE, NEMOM P.O.,', '695020');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('807f05a2-34b9-489a-9efb-b107d7f47809', 'Permanent', 'MAVILA HOUSE,PULIMKUDI MULLOOR P.O. VIA VIZHINJAM', '695521');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b1e15b4e-1861-4636-9202-50964e8a967f', 'CA/1996/09805', 'Mr', 'DWARKA RAGHUKUL', NULL, 'PERSHAD', 'Male', '1970-01-01', NULL, NULL, NULL, '1991-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d0162736-ea47-42d6-96cb-fa3593c47dcd', 'CA/1996/19326', 'Mr', 'ANIL RAMCHANDRA', NULL, 'JOSHI', 'Male', '1965-07-09', NULL, NULL, '1996-01-09', '2008-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d0162736-ea47-42d6-96cb-fa3593c47dcd', 'Communication', '412, F2, BANSHANHARI APPT, SAMBHARE ROAD, GAONBHAG', '416416');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d0162736-ea47-42d6-96cb-fa3593c47dcd', 'Permanent', '497,ZUNZAR CHOWK SAMBHARE ROAD,GAON BHAG', '416416');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('be67e408-d2ac-4cdf-aa2b-8fa64c6efb46', 'CA/1996/19327', 'Mr', 'KARUNA KANTILAL', NULL, 'DESAI', 'Female', '1971-04-01', NULL, NULL, '1996-01-09', '2008-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('be67e408-d2ac-4cdf-aa2b-8fa64c6efb46', 'Communication', '6/545  ZAYERI SADAK ZAVERI SADAK, ABOVE SAKAR TRADERS', '396445');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('be67e408-d2ac-4cdf-aa2b-8fa64c6efb46', 'Permanent', '4/493 ZAVERI SADAK', '396445');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6cf5f55c-6e20-4f7c-9645-5f46c8c7011f', 'CA/1996/19328', 'Mr', 'SUDEEP', NULL, 'K.', 'Male', '1972-05-12', 'peedus10@gmail.com', '7022449484', '1996-01-09', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6cf5f55c-6e20-4f7c-9645-5f46c8c7011f', 'Communication', 'Shambhala, 60/A, VKRA, korothuparabu, Vazhipokku Madathilmukku Road, Nellikode P O', '673016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6cf5f55c-6e20-4f7c-9645-5f46c8c7011f', 'Permanent', 'Shambhala, 60/A, VKRA, korothuparabu, Vazhipokku Madathilmukku Road, Nellikode P O', '673016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0d1ed994-d390-4e32-8248-5cdd3424e9aa', 'CA/1996/19329', 'Mr', 'GINNI', NULL, 'REKHI', 'Female', '1970-12-07', NULL, NULL, '1996-01-09', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d1ed994-d390-4e32-8248-5cdd3424e9aa', 'Communication', '4624, POCKET B-5 & 6, VASANT KUNJ,', '110070');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d1ed994-d390-4e32-8248-5cdd3424e9aa', 'Permanent', '24-B, SURYA APARTMENTS SECTOR-13, PLOT NO-24 ROHIN', '110085');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fbba2917-ed1b-46c9-9898-39105afc5113', 'CA/1997/20899', 'Mr', 'SHOBA', NULL, 'SIVAKOLUNDU', 'Female', '1965-09-22', NULL, NULL, '1997-01-08', '1998-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fbba2917-ed1b-46c9-9898-39105afc5113', 'Communication', 'CANNON DESIGN GROUP 40 GOLD STREET CA-94133', '201301');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fbba2917-ed1b-46c9-9898-39105afc5113', 'Permanent', 'CANNON DESIGN GROUP 40 GOLD STREET CA-94133', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9a9fa7b3-670d-4355-a820-64b9a57d8b4c', 'CA/1997/20900', 'Mr', 'RAJ KUMAR', NULL, 'MEDITHI', 'Male', '1973-06-17', NULL, NULL, '1997-01-08', '2011-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9a9fa7b3-670d-4355-a820-64b9a57d8b4c', 'Communication', 'PLOT NO-102, SWARNAPURI COLONY, BEH.DON BOSCO SCHOOL, ERRAGADDA', '500018');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9a9fa7b3-670d-4355-a820-64b9a57d8b4c', 'Permanent', 'PLOT NO-102, SWARNAPURI COLONY, BEH.DON BOSCO SCHO', '500018');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1696f454-2b5a-4a6d-85fc-4aec9c1db2e1', 'CA/1997/20901', 'Mr', 'DEVENDRA PRATAP', NULL, 'SINGH', 'Male', '1973-12-19', NULL, NULL, '1997-01-08', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1696f454-2b5a-4a6d-85fc-4aec9c1db2e1', 'Communication', '2/612, VIKAS NAGAR,', '226022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1696f454-2b5a-4a6d-85fc-4aec9c1db2e1', 'Permanent', '2/612,VIKAS NAGAR', '226022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f8f9b6ed-04c6-4a66-9d52-f729c6e32dea', 'CA/1997/20902', 'Mr', 'SHALEEN', NULL, 'SHARMA', 'Male', '1972-11-16', 'shaleen.sharma@wud.ac.in', NULL, '1997-01-08', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f8f9b6ed-04c6-4a66-9d52-f729c6e32dea', 'Communication', 'C-459 SARASWATI VIHAR', '110034');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f8f9b6ed-04c6-4a66-9d52-f729c6e32dea', 'Permanent', 'C-459 SARASWATI VIHAR', '110034');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('99850604-d1de-4bb0-8dcd-15d4a54fd0e5', 'CA/1997/20903', 'Mr', 'KAPIL', NULL, 'SHARMA', 'Male', '1972-09-16', 's.k.integrated@yahoo.com', NULL, '1997-01-08', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('99850604-d1de-4bb0-8dcd-15d4a54fd0e5', 'Communication', 'S.K.INTEGRATED CONSULTANT,
280, DEEPALI ENCLAVE, PITAMPURA,', '110034');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('99850604-d1de-4bb0-8dcd-15d4a54fd0e5', 'Permanent', 'S.K.INTEGRATED CONSULTANT 280 DEEPALI', '110034');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6588b992-ed37-49c5-b55d-fd594e95ea21', 'CA/1998/22460', 'Mr', 'MANJUSHA', NULL, 'SHRIVASTAVA', 'Female', '1969-08-09', NULL, NULL, '1998-01-07', '1999-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6588b992-ed37-49c5-b55d-fd594e95ea21', 'Communication', 'D-12,AKASBHARTI APARTMENT, PLOT NO.24, I.P.EXTENSION, PATPARGANJ', '110092');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6588b992-ed37-49c5-b55d-fd594e95ea21', 'Permanent', 'D-12,AKASBHARTI APTT. PLOT NO.24,I.P.EXTN. PATPARG', '110092');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('8c9b382f-6f45-458a-ba0e-096a254326b2', 'CA/1998/22461', 'Mr', 'PANKAJ MISHRA BHAVANI', NULL, 'SHANKAR MISHRA', 'Male', '1972-04-24', NULL, NULL, '1998-01-07', '1999-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8c9b382f-6f45-458a-ba0e-096a254326b2', 'Communication', '21-22/4 &quot;PREM VILLA&quot; NEW PALASIA', '452001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8c9b382f-6f45-458a-ba0e-096a254326b2', 'Permanent', '21-22/4 &quot;PREM VILLA&quot; NEW PALASIA', '452001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bd29fe5c-f273-4fd4-8eca-64bac8324a62', 'CA/1998/22462', 'Mr', 'POOJA SURINDERKUMAR', NULL, 'AGARWAL', 'Female', '1973-07-17', NULL, NULL, '1998-01-07', '2009-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bd29fe5c-f273-4fd4-8eca-64bac8324a62', 'Communication', 'BUNGALOW NO.1179, SECTOR-17', '121001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bd29fe5c-f273-4fd4-8eca-64bac8324a62', 'Permanent', 'BUNGALOW NO.1179 SECTOR-17', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9152dd68-ab1e-4dac-9913-ae7ccfd2e30c', 'CA/1998/22463', 'Mr', 'P.V.', NULL, 'RAJAN', 'Male', '1972-01-24', NULL, NULL, '1998-01-07', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9152dd68-ab1e-4dac-9913-ae7ccfd2e30c', 'Communication', 'P.v.RAJAN,
saathwik
KURISHUMUTTAM,PEYAD PO
THIRUVANANTHAPURAM', '695573');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9152dd68-ab1e-4dac-9913-ae7ccfd2e30c', 'Permanent', 'THAZHE VEETIL P.O.CHALACODE VIA PAYYANNOOR', '670307');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('09aa7dc5-3bc7-47f0-8756-dfd8e6d48ca0', 'CA/1998/22464', 'Mr', 'ANURAG', NULL, 'DEWAN', 'Female', '1974-09-13', NULL, NULL, '1998-01-07', '2013-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('09aa7dc5-3bc7-47f0-8756-dfd8e6d48ca0', 'Communication', 'STREET NO.2, SUNDER NAGRI, SITO ROAD', '152116');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('09aa7dc5-3bc7-47f0-8756-dfd8e6d48ca0', 'Permanent', 'H.NO.972,SECTOR-10', '134109');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('4a252f8d-98f8-40c8-8e66-887b60b86e5c', 'CA/1999/24019', 'Mr', 'BALA SUBRAHMANYAM', NULL, 'DIRISALA', 'Male', '1975-03-09', NULL, NULL, '1999-01-06', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('4a252f8d-98f8-40c8-8e66-887b60b86e5c', 'Communication', '504, ASHOKA LIVIANO TOWERS, 277, NEAR ORR TOLLGATE-1, PUPPALGUDA, KHAGAGUDA', '500075');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('4a252f8d-98f8-40c8-8e66-887b60b86e5c', 'Permanent', 'H.NO.-19-25-1,SUBBIREDDY COLONY', '534201');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b9648f02-87d3-4347-8f9e-2d337234ef0e', 'CA/1999/24020', 'Mr', 'VISWA VIKRANTH', NULL, 'MUKALA', 'Male', '1976-07-30', 'vvmukala@gmail.com', '8550997741', '1999-01-06', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9648f02-87d3-4347-8f9e-2d337234ef0e', 'Communication', 'C2A-804,Long Island, Pride World City,Charholi, Pune', '412105');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9648f02-87d3-4347-8f9e-2d337234ef0e', 'Permanent', 'C2A-804,Long Island, Pride World City,Charholi, Pune', '412105');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bdfe6b68-b5f3-4143-b469-91982350e722', 'CA/1999/24021', 'Mr', 'SUDIP KUMAR', NULL, 'SUR', 'Male', '1975-10-10', NULL, NULL, '1999-01-06', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bdfe6b68-b5f3-4143-b469-91982350e722', 'Communication', '14/2, KALI KUMAR MUKHERJEE LANE, P.O.SIBPUR, P.S. SIBPUR', '711102');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bdfe6b68-b5f3-4143-b469-91982350e722', 'Permanent', '14/2,KALI KUMAR MUKHERJEE LANE,SIBPUR', '711102');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3f62c9c4-0400-4f46-a86d-405f8be802d1', 'CA/1999/24022', 'Mr', 'MALINI C.', NULL, 'H.', 'Female', '1973-03-01', 'msarchitects.blr@gmail.com', '9900516885', '1999-01-06', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3f62c9c4-0400-4f46-a86d-405f8be802d1', 'Communication', 'NO.S-3, PLOT NO.1 & 2, FAIR PEARLS, 1ST MAIN ROAD, PAMPA EXTENSION, KEMPAPURA HEBBAL', '560024');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3f62c9c4-0400-4f46-a86d-405f8be802d1', 'Permanent', 'NO.S-3, PLOT NO.1 & 2, FAIR PEARLS, 1ST MAIN ROAD, PAMPA EXTENSION, KEMPAPURA HEBBAL', '560024');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ea03a922-d67e-459d-94c8-12c419532eab', 'CA/1999/24023', 'Mr', 'SRINIVAS', NULL, 'H.V.', 'Male', '1973-12-05', '1973srini.blr@gmail.com', '9945694490', '1999-01-06', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ea03a922-d67e-459d-94c8-12c419532eab', 'Communication', 'NO.S-3, PLOT NO.1 & 2, FAIR PEARLS, 1ST MAIN ROAD, PAMPA EXTENSION, KEMPAPURA HEBBAL', '560024');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ea03a922-d67e-459d-94c8-12c419532eab', 'Permanent', 'NO.S-3, PLOT NO.1 & 2, FAIR PEARLS, 1ST MAIN ROAD, PAMPA EXTENSION, KEMPAPURA HEBBAL', '560024');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('dcfb385a-26db-49ca-9e85-d8ae439041f2', 'CA/2000/25577', 'Mr', 'ARTI', NULL, 'MISHRA', 'Female', '1974-04-09', NULL, NULL, '2000-01-16', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('dcfb385a-26db-49ca-9e85-d8ae439041f2', 'Communication', 'D/O Mr.Ishwar Chandra Mishra, HIG-AE-4A, Ram Ganga Vihar Phase-I, Sonak Pur Kanth Road,', '244001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('dcfb385a-26db-49ca-9e85-d8ae439041f2', 'Permanent', 'D/O.MR.I.C.MISHRA,ABOVE P.P.EYE HOSP.,JAIN MANDIR', '244001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3849f260-2682-476a-8247-7edc87516391', 'CA/2000/25578', 'Mr', 'SUNILKUMAR R.', NULL, 'NIDONI', 'Male', '1975-07-21', NULL, NULL, '2000-01-16', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3849f260-2682-476a-8247-7edc87516391', 'Communication', 'NO.197, IST MAIN, ROYAL HERMITAGE GOTTIGARE,  BANNERGHATTA ROAD', '560083');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3849f260-2682-476a-8247-7edc87516391', 'Permanent', 'C/O.R.S.NIDONI JAYNAGAR COLONY', '586101');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ebd90404-fe1d-4835-abbe-a77c3d171b8a', 'CA/2000/25579', 'Mr', 'KAPIL SHARAD', NULL, 'LAHOTI', 'Male', '1975-11-23', NULL, NULL, '2000-01-16', '2001-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ebd90404-fe1d-4835-abbe-a77c3d171b8a', 'Communication', '2,SARGAMAPTS. RACCA COLONY', '422002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ebd90404-fe1d-4835-abbe-a77c3d171b8a', 'Permanent', '2, SARGAM APTS. RACCA COLONY', '422002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('79776eed-1cb7-4c9f-a1d5-d70d35634189', 'CA/2000/25580', 'Mr', 'SHAILESH V.', NULL, 'SAWANT', 'Male', '1976-10-01', NULL, NULL, '2000-01-16', '2011-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('79776eed-1cb7-4c9f-a1d5-d70d35634189', 'Communication', 'BLDG.NO.M-2, FLAT-17, KASHISH PARK, RAJAMATA SOCIETY, L.B.S.ROAD, THANE(W)', '400082');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('79776eed-1cb7-4c9f-a1d5-d70d35634189', 'Permanent', 'D/03,BILWA KUNJ,L.B.S. ROAD,MULUND(W)', '400082');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('446896b1-aa6b-4380-9d15-1397f8a90f06', 'CA/2000/25581', 'Mr', 'GURUPRASAD', NULL, 'B.K.', 'Male', '1974-04-23', NULL, NULL, '2000-01-16', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('446896b1-aa6b-4380-9d15-1397f8a90f06', 'Communication', 'NO.71/2, 8TH MAIN, MATHIKERE EXTN., OPP.SBI BRANCH,MATHIKERE', '560054');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('446896b1-aa6b-4380-9d15-1397f8a90f06', 'Permanent', 'NO.71/2,8TH MAIN MATHIKERE EXTN.', '560054');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ad839104-2e8e-4eef-8e2d-0e33b1c475ed', 'CA/2001/27059', 'Mr', 'NIDHI', NULL, 'GUPTA', 'Female', '1977-08-22', NULL, NULL, '2001-01-11', '2002-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ad839104-2e8e-4eef-8e2d-0e33b1c475ed', 'Communication', 'H.NO.1378-A,SECTOR 20-B', '160020');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ad839104-2e8e-4eef-8e2d-0e33b1c475ed', 'Permanent', 'H.NO.1378-A,SECTOR 20-B', '160020');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('602f0664-3978-428a-a14c-bf4dbe40bf91', 'CA/2001/27060', 'Mr', 'MONIKA', NULL, 'GOEL', 'Female', '1978-05-03', NULL, NULL, '2001-01-11', '2003-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('602f0664-3978-428a-a14c-bf4dbe40bf91', 'Communication', 'H.NO.794,SECTOR-10', '134109');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('602f0664-3978-428a-a14c-bf4dbe40bf91', 'Permanent', 'H.NO.794,SECTOR-10', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a43e67df-f38c-44af-bf35-2a560ad7c882', 'CA/2001/27061', 'Mr', 'KRUPA', NULL, 'R.', 'Female', '1977-02-24', NULL, NULL, '2001-01-11', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a43e67df-f38c-44af-bf35-2a560ad7c882', 'Communication', 'No.657, 9th main, 3rd Block, 1st Stage, HBR Layout,', '530043');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a43e67df-f38c-44af-bf35-2a560ad7c882', 'Permanent', 'NO.841,7TH MAIN ISRO LAYOUT', '560078');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('33ebb598-5ec3-4260-b5fd-e9bb6109c9dd', 'CA/2001/27062', 'Mr', 'SUNITA CHANDRAKANT', NULL, 'DANDE', 'Female', '1976-06-02', NULL, NULL, '2001-01-11', '2012-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('33ebb598-5ec3-4260-b5fd-e9bb6109c9dd', 'Communication', 'C/O.MR.C.N.DANDE,PLOT #37 N-8/A,BAJARANG CHOWK CIDCO', '431003');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('33ebb598-5ec3-4260-b5fd-e9bb6109c9dd', 'Permanent', 'C/O.MR.C.N.DANDE,PLOT #37 N-8/A,BAJARANG CHOWK CID', '431003');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('57a27a60-8990-404f-b515-123e6c1fd389', 'CA/2001/27063', 'Mr', 'ABHAY GANESH', NULL, 'SHRINAGAR', 'Male', '1977-07-06', NULL, NULL, '2001-01-11', '2022-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('57a27a60-8990-404f-b515-123e6c1fd389', 'Communication', 'RAVI NAGAR, NEAR SUDHIR COLONY, SANTAJINAGAR ROAD,', '444005');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('57a27a60-8990-404f-b515-123e6c1fd389', 'Permanent', 'RAVINAGAR,SANTAJINAGAR ROAD,NR.SUDHIR COLONY', '444005');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9b891cd5-ba68-4ced-ba8f-935790a411ed', 'CA/2002/28711', 'Mr', 'VIKASH', NULL, 'GUPTA', 'Male', '1976-01-26', NULL, NULL, '2002-01-17', '2013-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9b891cd5-ba68-4ced-ba8f-935790a411ed', 'Communication', 'R-6/224,RAJNAGAR', '201001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9b891cd5-ba68-4ced-ba8f-935790a411ed', 'Permanent', 'R-6/224,RAJNAGAR', '201001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cb44ff12-3300-48a9-aec9-b45bd299518d', 'CA/2002/28712', 'Mr', 'RADHA', NULL, 'SHUKLA', 'Female', '1970-05-14', NULL, NULL, '2002-01-17', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cb44ff12-3300-48a9-aec9-b45bd299518d', 'Communication', 'AASHIRWAD VILLA,D-22 SECTORG,L.D.A.COLONY KANPUR ROAD', '226012');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cb44ff12-3300-48a9-aec9-b45bd299518d', 'Permanent', 'AASHIRWAD VILLA,D-22 SECTOR G ,L.D.A.COLONY KANPUR', '226012');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('58dca695-fbb0-415e-894d-da1cbf1947a8', 'CA/2002/28713', 'Mr', 'SIDDHARTHA SABYASACHI', NULL, 'SEN', 'Male', '1978-07-09', NULL, NULL, '2002-01-17', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('58dca695-fbb0-415e-894d-da1cbf1947a8', 'Communication', 'No.2075, Sobha Primrose Apartments, green glen layout, outer ring road, bellandur,', '560103');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('58dca695-fbb0-415e-894d-da1cbf1947a8', 'Permanent', '5/6,HEERABAGH FLATS OPP.LAXMIVILAS HOTEL S.M.S.ROA', '302004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('31136067-f08d-455f-a190-dfd2607c0f2f', 'CA/2002/28714', 'Mr', 'MEENAKSHI', NULL, 'JAIN', 'Female', '1966-01-03', 'meenakkshijaiin@gmail.com', '9871533114', '2002-01-17', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('31136067-f08d-455f-a190-dfd2607c0f2f', 'Communication', 'B-6/37, 2ND FLOOR, SAFDARJUNG ENCLAVE,', '110029');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('31136067-f08d-455f-a190-dfd2607c0f2f', 'Permanent', 'B-6/37/2,SAFDARJUNG ENCL.', '110029');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('793dc1d3-03c1-4d68-9c68-fedd83a20fc9', 'CA/2002/28715', 'Mr', 'SHEETAL V.', NULL, 'KAJI', 'Female', '1977-09-24', NULL, NULL, '2002-01-17', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('793dc1d3-03c1-4d68-9c68-fedd83a20fc9', 'Communication', 'C-57, Pocket-6, Kendriya Vihar-2,', '201305');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('793dc1d3-03c1-4d68-9c68-fedd83a20fc9', 'Permanent', 'D-128,SFS FLATS SARIKA VIHAR', '110044');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e1910b80-c0a9-478d-9050-74359ee8a95f', 'CA/2003/30526', 'Mr', 'RAHUL VISHWAS', NULL, 'SARDESAI', 'Male', '1978-04-25', 'rahul.sardesai@gmail.com', '9923439101', '2003-01-02', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e1910b80-c0a9-478d-9050-74359ee8a95f', 'Communication', '301, Tropical Palms, Behind Models Status, Next to Kaivalyya, Dona Paua, Goa,', '403002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e1910b80-c0a9-478d-9050-74359ee8a95f', 'Permanent', 'GF2, Alankar Building, St. Marys Colony, Lane 3, Miramar, Panaji, Goa', '403001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('67e718c8-3724-425c-8381-819dfd34a8c1', 'CA/2003/30527', 'Mr', 'VIJAYA SANKARI', NULL, 'P.M.', 'Female', '1978-07-26', 'sankari.mani@gmail.com', '9840842042', '2003-01-02', '2014-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('67e718c8-3724-425c-8381-819dfd34a8c1', 'Communication', 'NO. 314,S5, GOKUL APTS., LLOYDS ROAD, ROYAPETTAH', '600014');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('67e718c8-3724-425c-8381-819dfd34a8c1', 'Permanent', '167,RAMASAMY STREET GOPALAPURAM', '600086');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d6505b06-5fc1-46e7-b397-736c60fdfa04', 'CA/2003/30528', 'Mr', 'GAGANDEEP', NULL, 'KAUR', 'Female', '1978-01-19', NULL, NULL, '2003-01-02', '2004-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d6505b06-5fc1-46e7-b397-736c60fdfa04', 'Communication', 'H.NO.4,RAJGURU NAGAR EXTENSION,V.P.O.THREEKE,FEROZEPUR ROAD', '142021');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d6505b06-5fc1-46e7-b397-736c60fdfa04', 'Permanent', 'H.NO.4,RAJGURU NAGAR EXT. V.P.O.THREEKE,FEROZEPUR', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('610f0ab9-5461-4ddb-af81-40b0bf40842d', 'CA/2003/30529', 'Mr', 'PANKAJ', NULL, 'ARORA', 'Male', '1978-08-09', NULL, NULL, '2003-01-02', '2004-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('610f0ab9-5461-4ddb-af81-40b0bf40842d', 'Communication', 'H.NO.274-B,MODEL TOWN EXTENSION', '141002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('610f0ab9-5461-4ddb-af81-40b0bf40842d', 'Permanent', 'H.NO.274-B,MODEL TOWN EXTENSION', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b447d653-2fc1-4fea-8788-6488f572b9ea', 'CA/2003/30530', 'Mr', 'WASEEM', NULL, 'MOHAMMAD', 'Male', '1976-03-25', 'smwarchi@rediffmail.com', '9827248462', '2003-01-02', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b447d653-2fc1-4fea-8788-6488f572b9ea', 'Communication', '102, ALI APARTMENTS, AMEERGANG LOWER IDGAH HILLS', '462001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b447d653-2fc1-4fea-8788-6488f572b9ea', 'Permanent', '102, ALI APARTMENT, AMEERGANJ, LOWER IDGHA HILLS,', '462001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3bbd50cf-ffab-4258-8176-674f740956be', 'CA/2004/32729', 'Mr', 'BAKUL', NULL, 'JANI', 'Male', '1958-10-28', 'bakuljani@gmail.com', '9611152810', '2004-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3bbd50cf-ffab-4258-8176-674f740956be', 'Communication', '1216  34 C CROSS, 4TH T BLOCK JAYANAGAR', '560041');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3bbd50cf-ffab-4258-8176-674f740956be', 'Permanent', '1216  34 C Cross, 4th T Block Jayanagar Bangalore', '560041');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3fae8c99-a77e-42a7-b441-92447a6fd8a5', 'CA/2004/32730', 'Mr', 'GOUTAM', NULL, 'S.', 'Male', '1980-05-10', NULL, NULL, '2004-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fae8c99-a77e-42a7-b441-92447a6fd8a5', 'Communication', '113/1,FIRST FLOOR,4TH STREET, KARPAGAM AVENUE, R.A.PURAM', '600028');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3fae8c99-a77e-42a7-b441-92447a6fd8a5', 'Permanent', '33/1,THYAGARAJ LAYOUT JAI BHARATH NAGAR BANASWADI', '560033');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f4f9d764-50e0-4732-a251-08215ac6f0d0', 'CA/2004/32731', 'Mr', 'ARUN', NULL, 'BHARDWAJ', 'Male', '1976-09-13', NULL, NULL, '2004-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f4f9d764-50e0-4732-a251-08215ac6f0d0', 'Communication', 'J-125,RESERVE BANK ENCL. PASCHIM VIHAR', '110063');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f4f9d764-50e0-4732-a251-08215ac6f0d0', 'Permanent', 'J-125,RESERVE BANK ENCL. PASCHIM VIHAR', '110063');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f2d26f67-512d-43c2-aa7b-010b336af00c', 'CA/2004/32732', 'Mr', 'KHURRAM', NULL, 'ASHRAF', 'Male', '1978-10-03', 'ar_khurram@yahoo.co.in', '9838727149', '2004-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f2d26f67-512d-43c2-aa7b-010b336af00c', 'Communication', 'Design Architects & Associates
Flat No. 3132, Block-3, Saryu Apartment, Sector-1, Gomti Nagar Extension', '226010');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f2d26f67-512d-43c2-aa7b-010b336af00c', 'Permanent', 'Design Architects & Associates
Flat No. 3132, Block-3, Saryu Apartment, Sector-1, Gomti Nagar Extension', '226010');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('64d5c5fc-c532-4be1-b489-23f38764c18c', 'CA/2004/32733', 'Mr', 'MANOSH', NULL, 'THOMAS', 'Male', '1977-11-27', NULL, NULL, '2004-01-01', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('64d5c5fc-c532-4be1-b489-23f38764c18c', 'Communication', 'S/O.LATE M.P.THOMAS,COURT VIEW RD,MALIAKKAL HOUSE KULIYADAN,IRINJALAKUDA', '680121');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('64d5c5fc-c532-4be1-b489-23f38764c18c', 'Permanent', 'S/O.LATE M.P.THOMAS,COURT VIEW RD,MALIAKKAL HOUSE', '680121');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0c0a6b2e-24d0-44ba-8958-6b221c0212f7', 'CA/2005/34995', 'Mr', 'VIBHA', NULL, 'SRIVASTAVA', 'Female', '1961-09-21', NULL, '8795811298', '2005-01-06', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0c0a6b2e-24d0-44ba-8958-6b221c0212f7', 'Communication', 'SECTOR-18/526 INDIRA NAGAR', '226016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0c0a6b2e-24d0-44ba-8958-6b221c0212f7', 'Permanent', 'SECTOR-18/526 INDIRA NAGAR', '226016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cad97f0e-c1e4-473e-8a29-a6524af3654a', 'CA/2005/34996', 'Mr', 'UMA RAMACHANDRAN', NULL, 'DIKSHIT', 'Female', '1973-08-23', NULL, NULL, '2005-01-06', '2016-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cad97f0e-c1e4-473e-8a29-a6524af3654a', 'Communication', '415,BEZZOLA COMPLEX V.N.PURAV MARG CHEMBUR', '400071');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cad97f0e-c1e4-473e-8a29-a6524af3654a', 'Permanent', '415,BEZZOLA COMPLEX V.N.PURAV MARG CHEMBUR', '400071');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5691d1ae-d652-4263-a209-01b77764ee36', 'CA/2005/34997', 'Mr', 'ANGELA SABITHA', NULL, 'M.', 'Female', '1979-01-26', NULL, NULL, '2005-01-06', '2016-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5691d1ae-d652-4263-a209-01b77764ee36', 'Communication', 'NO.535,JOHNS ROAD KAMMANAHALLI,THOMAS TOWN POST', '560084');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5691d1ae-d652-4263-a209-01b77764ee36', 'Permanent', 'NO.535,JOHN S ROAD KAMMANAHALLI,THOMAS TOWN POST', '560084');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('397124e2-daef-46ca-9132-35834f5818ff', 'CA/2005/34998', 'Mr', 'MOUSUMI', NULL, 'BISWAS', 'Female', '1979-11-03', NULL, NULL, '2005-01-06', '2016-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('397124e2-daef-46ca-9132-35834f5818ff', 'Communication', 'C/O.DIPANKAR DAS ASHRAM ROAD,SHANTIPUR', '781009');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('397124e2-daef-46ca-9132-35834f5818ff', 'Permanent', 'C/O.DIPANKAR DAS ASHRAM ROAD,SHANTIPUR', '781009');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3868e4d0-eecf-4ae8-aeb6-4be91113bb35', 'CA/2005/34999', 'Mr', 'KAUSHIK PADMAKAR', NULL, 'VARTAK', 'Male', '1980-07-22', NULL, NULL, '2005-01-06', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3868e4d0-eecf-4ae8-aeb6-4be91113bb35', 'Communication', 'KAMANA C0-OP HSG SOC.
BLDG NO.4 FLAT NO18 6TH  FLOOR  KAKASAHEB GADGIL MARG NR. SIDDDHIVINAYAK MANDIR', '400028');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3868e4d0-eecf-4ae8-aeb6-4be91113bb35', 'Permanent', '18/4,KAMANA SOCIETY KAKASAHEB GADGIL MARG', '400028');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b94deea5-2c79-4e9e-adc3-153a49224df1', 'CA/2006/37307', 'Mr', 'REETA', NULL, 'SINGH', 'Female', '1978-10-04', 's_reetu@yahoo.com', NULL, '2006-01-05', '2027-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b94deea5-2c79-4e9e-adc3-153a49224df1', 'Communication', 'VILLAGE & POST OFFICE-BHIRA', '177001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b94deea5-2c79-4e9e-adc3-153a49224df1', 'Permanent', 'D/O.ER.K.N.SINGH,H.NO. E.B.IV/8,HPSEB COLONY DIST.', '174402');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2382570a-4c12-4fae-a32c-4da089688b0b', 'CA/2006/37308', 'Mr', 'MANISH', NULL, 'PILLIWAR', 'Male', '1971-04-27', 'manishpilliwar@yahoo.com', '9425209760', '2006-01-05', '2027-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2382570a-4c12-4fae-a32c-4da089688b0b', 'Communication', '25,SOUTH AVENUE, CHOUBEY COLONY', '492001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2382570a-4c12-4fae-a32c-4da089688b0b', 'Permanent', '25,SOUTH AVENUE CHOUBEY COLONY', '492001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2bbf6bae-a6bb-4248-8a3a-5c2f4e4a805f', 'CA/2006/37309', 'Mr', 'ANIL NARAYAN', NULL, 'KHARGAONKAR', 'Male', '1978-09-20', 'ak360architects@gmail.com', '9004960009', '2006-01-05', '2027-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2bbf6bae-a6bb-4248-8a3a-5c2f4e4a805f', 'Communication', '317-C, 3RD FLOOR, SAI VISAVA CHS, L.N. ROAD, NEAR RUIA GARDEN, HINDU COLONY, DADAR-MATUNGA EAST', '400019');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2bbf6bae-a6bb-4248-8a3a-5c2f4e4a805f', 'Permanent', '317-C, 3RD FLOOR, SAI VISAVA CHS, L.N. ROAD, OPP. PIROJ PALACE, HINDU COLONY, DADAR-EAST, NEAR RUIA COLLEGE', '400014');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5cb78401-1c4f-44d3-bce1-beb10ec6dd0b', 'CA/2006/37310', 'Mr', 'DEEPALI SHIVANAND', NULL, 'AGREKAR', 'Female', '1977-11-10', NULL, NULL, '2006-01-05', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5cb78401-1c4f-44d3-bce1-beb10ec6dd0b', 'Communication', '8/315,SHAILENDRA NAGAR S.V.ROAD,DAHISAR(E)', '400068');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5cb78401-1c4f-44d3-bce1-beb10ec6dd0b', 'Permanent', '8/315,SHAILENDRA NAGAR S.V.ROAD,DAHISAR(E)', '400068');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('51b8bfee-98c3-4eab-af10-0a575a17870f', 'CA/2006/37311', 'Mr', 'ZAFAR', 'MASUD', 'CHOUDHARY', 'Male', '1969-12-09', NULL, NULL, '2006-01-05', '2027-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('51b8bfee-98c3-4eab-af10-0a575a17870f', 'Communication', 'H.NO.11, SUKHMANI ENCLAVE, BAREWAL CANAL ROAD,', '141002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('51b8bfee-98c3-4eab-af10-0a575a17870f', 'Permanent', '24,DEFENCE COLONY B.R.S.NAGAR', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('583e77cb-301c-4abd-a6a1-c35e5416271d', 'CA/2007/39252', 'Mr', 'KAMALA S.', NULL, 'SUBBARAYAN', 'Female', '1979-05-06', NULL, NULL, '2007-01-04', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('583e77cb-301c-4abd-a6a1-c35e5416271d', 'Communication', 'C/O.K.R.GANAPATHY 23,GANESH STREET GOPALPURAM', '600086');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('583e77cb-301c-4abd-a6a1-c35e5416271d', 'Permanent', 'C/O.K.R.GANAPATHY 23,GANESH STREET GOPALPURAM', '600086');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('72c5889b-28cd-4ed4-87e7-9925410a14af', 'CA/2007/39253', 'Mr', 'BASANT KUMAR BHAGAT', NULL, 'BADAMIDEV', 'Male', '1976-09-14', NULL, NULL, '2007-01-04', '2028-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('72c5889b-28cd-4ed4-87e7-9925410a14af', 'Communication', '67D, CENTURY APTS., SECTOR 100', '110065');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('72c5889b-28cd-4ed4-87e7-9925410a14af', 'Permanent', '119/2 BLOCK EAST OF KAILASH', '110065');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fd319ea9-bdfe-4a40-b48e-f9c08ca49c74', 'CA/2007/39254', 'Mr', 'ABHISHEK', NULL, 'KUMAR', 'Male', '1977-10-23', NULL, NULL, '2007-01-04', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fd319ea9-bdfe-4a40-b48e-f9c08ca49c74', 'Communication', 'M-1/68,SECTOR-B ALIGANJ', '226014');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fd319ea9-bdfe-4a40-b48e-f9c08ca49c74', 'Permanent', 'M-1/68,SECTOR-B ALIGANJ', '226014');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d03954ce-1408-44ef-830a-b1ef06cc8baa', 'CA/2007/39255', 'Mr', 'ANITHA SANKARAN', NULL, 'NAIR', 'Female', '1982-04-10', NULL, NULL, '2007-01-04', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d03954ce-1408-44ef-830a-b1ef06cc8baa', 'Communication', 'AWING,ROOM NO.401 ARJUN COMPLEX,KOPAR VILL. DOMBIVLI(W)', '421202');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d03954ce-1408-44ef-830a-b1ef06cc8baa', 'Permanent', 'A WING,ROOM NO.401 ARJUN COMPLEX,KOPAR VILL. DOMB', '421202');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5271b027-8616-4017-8a1e-e59ce0471738', 'CA/2007/39256', 'Mr', 'SAJAN', NULL, 'PAUL', 'Male', '1981-11-29', NULL, NULL, '2007-01-04', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5271b027-8616-4017-8a1e-e59ce0471738', 'Communication', 'CHIRACKAKUDY(H) VAIKKARA P.O.,PERUMBAVOOR (VIA),ERNAKULAM DIST.', '683549');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5271b027-8616-4017-8a1e-e59ce0471738', 'Permanent', 'CHIRACKAKUDY(H) VAIKKARA P.O.,PERUMBAVOOR (VIA),ER', '683549');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b97043ca-5fdf-476f-9c26-a4d7ad84d722', 'CA/2008/41586', 'Mr', 'BIJETA DEVI', NULL, 'BACHASPATI', 'Female', '1984-02-23', 'bachaspati@gmail.com', '9538958002', '2008-01-03', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b97043ca-5fdf-476f-9c26-a4d7ad84d722', 'Communication', 'C/O B. KHELCHANDRA SHARMA
NONGMEIBUNG SERAM 
LEIRAK, OPPOSITE LAMDAIPUNG', '795005');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b97043ca-5fdf-476f-9c26-a4d7ad84d722', 'Permanent', 'No. 553, 1st Floor, 16th Cross, Behind RTO, Indiranagar', '560038');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fde8669b-be09-4a78-a316-1c38342258c7', 'CA/2008/41587', 'Mr', 'DIVYA', NULL, 'KOHLI', 'Female', '1984-02-06', NULL, NULL, '2008-01-03', '2019-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fde8669b-be09-4a78-a316-1c38342258c7', 'Communication', 'GIAN SAGAR KOHLI &amp; SONS GARH ROAD', '245101');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fde8669b-be09-4a78-a316-1c38342258c7', 'Permanent', 'GIAN SAGAR KOHLI &amp; SONS GARH ROAD', '245101');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('df29b3bf-4040-4e9a-b2f8-1f776a1c5f18', 'CA/2008/41588', 'Mr', 'TINA K.', NULL, 'G.', 'Female', '1982-07-19', NULL, NULL, '2008-01-03', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('df29b3bf-4040-4e9a-b2f8-1f776a1c5f18', 'Communication', 'KOCHIPARAMBATH HOUSE CHAKKARAPADAM [P.O] PERINJANAM', '680686');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('df29b3bf-4040-4e9a-b2f8-1f776a1c5f18', 'Permanent', 'KOCHIPARAMBATH HOUSE CHAKKARAPADAM (P.O) PERINJANA', '680686');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('391105b5-c533-4698-b8b8-28333b6ad298', 'CA/2008/41589', 'Mr', 'KALKI', NULL, '', 'Female', '1981-07-03', NULL, NULL, '2008-01-03', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('391105b5-c533-4698-b8b8-28333b6ad298', 'Communication', 'B 55,ARAMANA BANGLAPARAMB COLONY B/H KTC, KANJIKODE', '678621');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('391105b5-c533-4698-b8b8-28333b6ad298', 'Permanent', 'B 55 `ARAMANA  BANGLAPARAMB COLONY B/H KTC, KANJIK', '678621');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6c23e90a-a17c-401b-a9bd-4dde894d3fad', 'CA/2008/41590', 'Mr', 'DEBARATI', NULL, 'CHAKRABORTY', 'Female', '1982-12-15', NULL, NULL, '2008-01-03', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6c23e90a-a17c-401b-a9bd-4dde894d3fad', 'Communication', 'ROOM NO-504, 5TH FLOOR, 1ST MSO BUILDING, NIZAM PALACE CAMPUS, 234/4 A.J.C.BOSE ROAD', '700020');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6c23e90a-a17c-401b-a9bd-4dde894d3fad', 'Permanent', '69/1,M.C. GARDEN ROAD', '700030');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('72ace6da-74a3-4871-9098-c22701dc1dd4', 'CA/2009/43902', 'Mr', 'SWAPNIL DHANRAJ', NULL, 'UKEY', 'Male', '1983-06-01', NULL, NULL, '2009-01-01', '2021-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('72ace6da-74a3-4871-9098-c22701dc1dd4', 'Communication', 'B-2/15-16, MIG-II NIT COLONY, ATREY LAYOUT,  PRATAP NAGAR,', '440022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e5f5681e-c0df-49f9-90a0-ad97631578a0', 'CA/2009/43903', 'Mr', 'VARUN', NULL, 'AGARWAL', 'Male', '1982-10-07', NULL, NULL, '2009-01-01', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e5f5681e-c0df-49f9-90a0-ad97631578a0', 'Communication', 'S/O.MR.JUSTICE B.D.AGARWAL,
JUDGE BUNGLOW NO.8, KHAKGULI,', '780004');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a00c12d1-ed96-464f-9e1b-4c4d8bd6d77f', 'CA/2009/43904', 'Mr', 'A.', NULL, 'KAYALVIZHI', 'Male', '1979-05-08', NULL, '9967007976', '2009-01-01', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a00c12d1-ed96-464f-9e1b-4c4d8bd6d77f', 'Communication', 'Dhanya,A-top3,Vashudhara Enclave,
Andalpuram', '625003');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('349824a9-c62c-4f9c-83a4-a34e9df8ecff', 'CA/2009/43905', 'Mr', 'ANURADHA', 'S.', 'T.', 'Male', '1979-05-15', NULL, NULL, '2009-01-01', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('349824a9-c62c-4f9c-83a4-a34e9df8ecff', 'Communication', 'SRI VINAYAKA, OPP. HEAD POST OFFICE ROAD, T. R. NAGAR,', '577522');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b9f2def9-b129-405c-9b6c-5d564ac9ac22', 'CA/2009/43906', 'Mr', 'MOSTAK', NULL, 'AHAMED', 'Male', '1983-07-05', 'mostak2007@gmail.com', '9007109017', '2009-01-01', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9f2def9-b129-405c-9b6c-5d564ac9ac22', 'Communication', 'Uniworld City, Vistas, Tower 10, 11th Floor, Flat 1103, Newtown, Kolkata 700156', '700156');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9f2def9-b129-405c-9b6c-5d564ac9ac22', 'Permanent', 'Uniworld City, Vistas, Tower 10, 11th Floor, Flat 1103, Newtown, Kolkata 700156', '700156');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0988eec1-efbb-4832-b8eb-a9ac9787752d', 'CA/2010/46944', 'Mr', 'Sonal', 'Jageshwar', 'Parkhe', 'Male', '1980-07-22', NULL, NULL, '2009-12-31', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0988eec1-efbb-4832-b8eb-a9ac9787752d', 'Communication', 'C/O.MR.M.G.DESHMUKH, PLOT NO.3, SHANTI NIKETAN COLONY,
RANA PRATAP NAGAR,', '440022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0988eec1-efbb-4832-b8eb-a9ac9787752d', 'Permanent', 'Sunil Pacholi &amp; Associates, 3rd Floor, Girija Apartment, Ramdaspeth', '440010');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f95fd7c8-0112-4451-87a8-51f1a7ad40dc', 'CA/2010/46945', 'Mr', 'Jayendrakumar', 'Jayantibhai', 'Patel', 'Male', '1986-04-29', 'ar.jaypatel@gmail.com', '9099057133', '2009-12-31', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f95fd7c8-0112-4451-87a8-51f1a7ad40dc', 'Communication', '802, THE PALM, SARGASAN CROSS ROAD', '382421');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f95fd7c8-0112-4451-87a8-51f1a7ad40dc', 'Permanent', '107, Shree Rang Mall, GIFT City Road, Randesan', '382007');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3409d170-8509-4c2b-b931-8e95f1f67ebf', 'CA/2010/46946', 'Mr', 'Raseek', 'Ashok Asha', 'Bhagat', 'Male', '1983-10-18', NULL, NULL, '2009-12-31', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3409d170-8509-4c2b-b931-8e95f1f67ebf', 'Communication', '15, MAHIM HOUSE, MOGUL LANE, MAHIM', '400016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3409d170-8509-4c2b-b931-8e95f1f67ebf', 'Permanent', '15, Mahim House, Mogul Lane, Mahim', '400016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b9cd5574-746b-42a5-aaf6-b5057ccc7f45', 'CA/2010/46947', 'Mr', 'Rosa', NULL, 'Markos', 'Female', '1986-04-06', NULL, NULL, '2009-12-31', '2021-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9cd5574-746b-42a5-aaf6-b5057ccc7f45', 'Communication', 'JOSEPH AND MARKOS, P.B.-86, VELLAPALLY LANE', '686001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9cd5574-746b-42a5-aaf6-b5057ccc7f45', 'Permanent', 'PSP Architects (P) Ltd., Y-83, 4th Street Anna Nagar East', '600040');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b9760bbf-f1b5-4b3d-a079-3e30552e7e82', 'CA/2010/46948', 'Mr', 'Ramakanth', NULL, 'C.', 'Male', '1984-12-20', NULL, NULL, '2009-12-31', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9760bbf-f1b5-4b3d-a079-3e30552e7e82', 'Communication', 'FLAT NO.A-5, BLOCK-A, BANJARA
ARCOT, SIVA ARUN COLONY, WEST MAREDPALLY', '500026');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b9760bbf-f1b5-4b3d-a079-3e30552e7e82', 'Permanent', '7-1-999, Shanker Veedhi', '500003');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2ba4de6e-accd-4c0e-8f90-1c532ac15a31', 'CA/2011/50978', 'Mr', 'Meghana', 'Reddy', 'Koduru', 'Female', '1987-09-15', NULL, NULL, '2011-02-08', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2ba4de6e-accd-4c0e-8f90-1c532ac15a31', 'Communication', '207-B, Usha Enclave, Navodaya Colony, Srinagar Colony Ext.', '500073');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2ba4de6e-accd-4c0e-8f90-1c532ac15a31', 'Permanent', 'HUE Designers Pvt. Ltd., 202, Classic Court Appartments, Eramanzil Colony', '500082');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('aeb59976-7584-46b4-9d32-9f7da6f14d40', 'CA/2011/50979', 'Mr', 'Patanjali', NULL, 'Biswas', 'Male', '1987-02-21', NULL, NULL, '2011-02-08', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aeb59976-7584-46b4-9d32-9f7da6f14d40', 'Communication', '42 A, INDRALOKE, ROAD NO.2, SODEPUR, NORTH 24 PARAGANAS,', '700110');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aeb59976-7584-46b4-9d32-9f7da6f14d40', 'Permanent', '42 A, Indraloke, Road No.2, Sodepur,', '700110');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('576d34a9-e549-4ae9-8c90-7963cc2c90bf', 'CA/2011/50980', 'Mr', 'Sneha', 'Snehal', 'Patani', 'Female', '1983-01-05', NULL, NULL, '2011-02-08', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('576d34a9-e549-4ae9-8c90-7963cc2c90bf', 'Communication', 'C-702, SHRI SHANNTI NAGAR SOCIETY, NEAR VIIT HOSTEL, GANGA-DHAM-SHATRUNJAY MANDIR ROAD, KONDHWA, BUDRUK', '411048');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('576d34a9-e549-4ae9-8c90-7963cc2c90bf', 'Permanent', 'G/127, Adinath Society, Satara Road', '411037');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('aedff669-9a09-4e78-a5c3-f1e2342dbb42', 'CA/2011/50981', 'Mr', 'Avadhut', 'Vijay Pradnya', 'Sawant', 'Male', '1981-06-10', NULL, NULL, '2011-02-08', '2022-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aedff669-9a09-4e78-a5c3-f1e2342dbb42', 'Communication', 'C/204, Om Tower, RAJESH NAGAR, NEAR J.B. KHOT SCHOOL, OPP.SAI BABA MANDIR, BORIVLI (W)', '400092');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('aedff669-9a09-4e78-a5c3-f1e2342dbb42', 'Permanent', 'C/204, Rajesh Nagar, Near J.B. Khot School, Sai Baba Nagar, Borivli (W)', '400092');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2298cfdd-95e2-4842-82e4-d6ffbdde8c1b', 'CA/2011/50982', 'Mr', 'Rameshbabu', NULL, 'Gambhiraopet', 'Male', '1980-11-04', 'akira.ramesh@gmail.com', '9900296120', '2011-02-08', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2298cfdd-95e2-4842-82e4-d6ffbdde8c1b', 'Communication', '#535 Sumukh Siri 2nd floor 
 1st A Main 8th Block Koramangala 
Bengaluru Karnataka 560095', '560095');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2298cfdd-95e2-4842-82e4-d6ffbdde8c1b', 'Permanent', '#535 Sumukh Siri 2nd floor 
 1st A Main 8th Block Koramangala 
Bengaluru Karnataka 560095', '560095');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('cd5f2a88-6aa4-4a2c-83f6-3727afd06374', 'CA/2012/54390', 'Mr', 'Ravindra', 'Avinash', 'K.', 'Male', '1978-07-21', 'aviarchitect@yahoo.in', '8217673274', '2012-01-19', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cd5f2a88-6aa4-4a2c-83f6-3727afd06374', 'Communication', 'No.25, 2nd cross, Hosahalli main road, next to sobha forestview apartment, kanakpura road,', '560109');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('cd5f2a88-6aa4-4a2c-83f6-3727afd06374', 'Permanent', 'No.25, 2nd cross, Hosahalli main road, next to sobha forestview apartment, kanakpura road,', '560109');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('856a9c78-d584-4468-b79c-7bb87303a38c', 'CA/2012/54391', 'Mr', 'Mahesh', 'K.', 'N.', 'Male', '1977-08-14', NULL, NULL, '2012-01-19', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('856a9c78-d584-4468-b79c-7bb87303a38c', 'Communication', '29/1514-D, JAWAHAR ROAD, VYTILLA', '682019');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('856a9c78-d584-4468-b79c-7bb87303a38c', 'Permanent', '29/1514-D, JAWAHAR ROAD, VYTILLA', '682019');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('48565f7b-8675-4ee3-bde3-38cd80283c72', 'CA/2012/54392', 'Mr', 'Vignya', 'Chetan', 'Shah', 'Female', '1980-09-01', NULL, NULL, '2012-01-19', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('48565f7b-8675-4ee3-bde3-38cd80283c72', 'Communication', 'A-10, DIVYA HOUSING SOC., NR. ESI HOSPITAL, GOTRI ROAD,', '390021');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('48565f7b-8675-4ee3-bde3-38cd80283c72', 'Permanent', 'A-10, Divya Housing Soc., Nr. ESI Hospital, Gotri Road', '390021');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('7a499988-b188-4a7d-9138-df67fae102c0', 'CA/2012/54393', 'Mr', 'Vinay', NULL, 'Mangtani', 'Male', '1988-05-12', NULL, NULL, '2012-01-19', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('7a499988-b188-4a7d-9138-df67fae102c0', 'Communication', 'Radha Swami Bhawan, Patel Ward', '487551');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('7a499988-b188-4a7d-9138-df67fae102c0', 'Permanent', 'Swami Ji Shopping Centre, New Galla Mandi Road', '487551');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9aca6706-25d9-4814-a743-9b63b22a28ae', 'CA/2012/54394', 'Mr', 'Mansi', 'Atulbhai', 'Shah', 'Female', '1985-02-07', 'mansi.shaharch@gmail.com', '9727934242', '2012-01-19', '2034-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9aca6706-25d9-4814-a743-9b63b22a28ae', 'Communication', 'G102, Maple County 1, Green Avenue, Avalon Hotel Road, behind Shilaj Crossing Road, Thaltej, Ahmedabad-380059', '380059');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9aca6706-25d9-4814-a743-9b63b22a28ae', 'Permanent', 'A 219, DEV ATELIER, NEAR DEER CIRCLE, ANAND NAGAR ROAD, PRAHALADNAGAR', '380015');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('92929868-bc72-46ce-97a8-d07b8fa3eb9c', 'CA/2013/58288', 'Mr', 'Anadi', 'Kumar', 'Dutta', 'Male', '1940-09-10', NULL, NULL, '2012-12-31', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('92929868-bc72-46ce-97a8-d07b8fa3eb9c', 'Communication', 'C/O, Dr. S.P. Dutta, 11, Broad Street, Flat No.-1H,', '700019');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('92929868-bc72-46ce-97a8-d07b8fa3eb9c', 'Permanent', '69/3, Purna Das Road, Building-Dishari', '700029');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('91671c35-d07e-44b0-b779-a57ca161ae97', 'CA/2013/58289', 'Mr', 'Priyanka', 'Sham Shaimaly', 'Jaokar', 'Female', '1985-10-18', NULL, NULL, '2012-12-31', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91671c35-d07e-44b0-b779-a57ca161ae97', 'Communication', 'A-204, Sankalp-I, Pimpari Pada, Gokul-Dham Market, Filmcity Road,Opp. Classic Comfort Hotel, Pimpari Pada, Malad (E)', '400097');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('91671c35-d07e-44b0-b779-a57ca161ae97', 'Permanent', 'A-204, Sankalp-I, Pimpari Pada, Gokul-Dham Market, Filmcity Road,Opp. Classic Comfort Hotel, Pimpari Pada, Malad (E)', '400097');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('20e6955d-3d5e-4f76-979e-58cff5a35edc', 'CA/2013/58290', 'Mr', 'N. Deepak', 'N.', 'Damodaran', 'Male', '1988-07-15', NULL, NULL, '2012-12-31', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('20e6955d-3d5e-4f76-979e-58cff5a35edc', 'Communication', 'C/O, V. Valsala, Veluthedathodi House, Cherattukuzhi Uphill', '676505');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('20e6955d-3d5e-4f76-979e-58cff5a35edc', 'Permanent', 'C/O, V. Valsala, Veluthedathodi House, Cherattukuzhi Uphill', '676505');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5bc267d0-c449-499d-a93d-a43405510885', 'CA/2013/58291', 'Mr', 'Mansi', 'Nayankumar', 'Pandya', 'Female', '1987-11-15', NULL, NULL, '2012-12-31', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5bc267d0-c449-499d-a93d-a43405510885', 'Communication', '2, Sardar Patel Society, Shanta Devi Road', '396445');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5bc267d0-c449-499d-a93d-a43405510885', 'Permanent', '2, Sardar Patel Society, Shanta Devi Road', '396445');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2a93919b-7eeb-44ac-bdd2-4fa489581016', 'CA/2013/58292', 'Mr', 'Asima', NULL, 'Moosan', 'Female', '1982-05-31', NULL, NULL, '2012-12-31', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2a93919b-7eeb-44ac-bdd2-4fa489581016', 'Communication', 'C/O.DR.P.MOIDU,
SHAMIYAS, PANOOR,', '670692');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2a93919b-7eeb-44ac-bdd2-4fa489581016', 'Permanent', 'C/O, Dr. P. Moidu, Shamiyas, Panoor, Kannur Dist.', '670692');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ca04bad6-19ed-49e3-adb0-16ff77b832fa', 'CA/2014/62289', 'Mr', 'Shubhangi', NULL, '', 'Female', '1986-06-16', NULL, NULL, '2014-01-15', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ca04bad6-19ed-49e3-adb0-16ff77b832fa', 'Communication', 'D/O. SURENDRA PRASAD, HOUSE NO.73, NIKUNJ CRYSTAL IDEAL CITY, AWADHPURI', '462022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ca04bad6-19ed-49e3-adb0-16ff77b832fa', 'Permanent', '6-B/20, Upper First Floor, Ramesh Nagar', '110015');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6d39ca69-3a92-4d03-8b85-6d56ebd4e4c8', 'CA/2014/62290', 'Mr', 'Nikhil', 'Kishor', 'Jaunjale', 'Male', '1983-11-05', NULL, '8600364768', '2014-01-15', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d39ca69-3a92-4d03-8b85-6d56ebd4e4c8', 'Communication', 'C/O KISHOR AMBADAS JAUNJALE, PLOT NO.18/B, EKNATH VIHAR, NEAR SHANKAR NAGAR,', '444605');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d39ca69-3a92-4d03-8b85-6d56ebd4e4c8', 'Permanent', 'Plot No.18/B, Eknath Vihar, Near Shankar Nagar,', '444606');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9e0b3040-c736-4d03-bf2e-117d0d1a8094', 'CA/2014/62291', 'Mr', 'Mehul', 'Jitendra Rita', 'Kanakia', 'Male', '1987-06-02', NULL, NULL, '2014-01-15', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9e0b3040-c736-4d03-bf2e-117d0d1a8094', 'Communication', '1001,BUILDING NO.5, WASABI TOWER,  GARDEN GROVE COMPLEX, PADMA NAGAR, CHIKOOWADI,, BORIVALI [W]', '400092');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9e0b3040-c736-4d03-bf2e-117d0d1a8094', 'Permanent', '17B, Shiv Darshan, Behind Midtown, S.V. Road, Borivali(W)', '400092');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6378a641-938a-4ee1-a117-28b16794adc0', 'CA/2014/62292', 'Mr', 'Ansha', NULL, 'Thomas', 'Female', '1990-04-12', NULL, NULL, '2014-01-15', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6378a641-938a-4ee1-a117-28b16794adc0', 'Communication', 'VALLIYIL HOUSE, KOORACHUND [P.O.]', '673527');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6378a641-938a-4ee1-a117-28b16794adc0', 'Permanent', 'Valliyil House, Koorachund (P.O.)', '673527');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1f86da23-f361-44da-a4c0-c93e87144433', 'CA/2014/62293', 'Mr', 'Shwetaben', 'Ranjan', 'Singh', 'Female', '1988-02-07', NULL, '8320115588', '2014-01-15', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1f86da23-f361-44da-a4c0-c93e87144433', 'Communication', '918, Bijovas, Nr. Swaminarayan Temple, Naranpura Gam,', '380013');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1f86da23-f361-44da-a4c0-c93e87144433', 'Permanent', 'Design Workshop, Flat No.1, Anurag Appartment, Nr. Stadium, Petrol Pump,', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a6fe0fc1-a93f-44ee-aa3a-11c4b3d01bf3', 'CA/2015/0000000001', 'Mr', 'Ranchod', 'Das', 'Chanchad', 'Other', '1994-12-31', NULL, NULL, NULL, NULL, 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a6fe0fc1-a93f-44ee-aa3a-11c4b3d01bf3', 'Communication', 'N/A', '110052');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a6fe0fc1-a93f-44ee-aa3a-11c4b3d01bf3', 'Permanent', 'N/A', '110052');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f5d9388a-72f0-48a4-8ccf-a3be6f897cd2', 'CA/2015/000000000aaa2', 'Mr', 'Ramesh', NULL, 'Gupta', 'Male', '1994-06-07', NULL, NULL, NULL, NULL, 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f5d9388a-72f0-48a4-8ccf-a3be6f897cd2', 'Communication', 'New Rohtak Road', '000000');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f5d9388a-72f0-48a4-8ccf-a3be6f897cd2', 'Permanent', 'New Rohtak Road', '000000');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9cfdf79d-9e3b-4dbe-a1eb-362544941873', 'CA/2015/000000000aaa3', 'Mr', 'Arun', NULL, 'Negi', 'Male', '1993-09-14', NULL, NULL, NULL, NULL, 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9cfdf79d-9e3b-4dbe-a1eb-362544941873', 'Communication', 'New Delhi', '110354');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9cfdf79d-9e3b-4dbe-a1eb-362544941873', 'Permanent', 'New Delhi', '110354');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('264bab98-e9b6-4efd-b657-746ec30ca757', 'CA/2015/66540', 'Mr', 'Mohamed', 'Anis', 'K.A.', 'Male', '1975-09-04', NULL, '9884585686', '2015-01-05', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('264bab98-e9b6-4efd-b657-746ec30ca757', 'Communication', '49/24,ramasamy street,Mannady,Chennai 600001', '600001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('264bab98-e9b6-4efd-b657-746ec30ca757', 'Permanent', '49/24, Ramasamy Street, Mannady', '600001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d86b976b-7936-4be9-9f51-a1897f542940', 'CA/2015/66541', 'Mr', 'Smruti', 'Sanjeevani', '', 'Female', '1983-10-28', NULL, NULL, '2015-01-05', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d86b976b-7936-4be9-9f51-a1897f542940', 'Communication', 'C/o. Mr.Jaydev Sahoo,
Covidien, DLF IT Park,
Block No.3, Ground Floor,
Gachibowli,', '500019');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d86b976b-7936-4be9-9f51-a1897f542940', 'Permanent', 'NICMAR, 25/1, NIA Post Office, Balewadi', '411045');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('eb766563-61ff-4a92-92b2-924e2817b4b6', 'CA/2016/73541', 'Mr', 'Seema', 'Deshpal Singh', 'Rani', 'Female', '1988-07-31', 'architect.seemarani@gmail.com', '8218453336', '2016-01-20', '2027-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('eb766563-61ff-4a92-92b2-924e2817b4b6', 'Communication', 'L-501, SIGNATURE VIEW APARTMENT,
MUKHERJEE NAGAR
PIN-110009', '110009');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('eb766563-61ff-4a92-92b2-924e2817b4b6', 'Permanent', 'L-501, SIGNATURE VIEW APARTMENT,
MUKHERJEE NAGAR
PIN-110009', '110009');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6ce1dfe7-7107-4668-ba5e-b16db915254d', 'CA/2016/73542', 'Mr', 'Shayamsundar', 'Digambar', 'Gandhe', 'Male', '1942-04-11', NULL, NULL, '2016-01-20', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6ce1dfe7-7107-4668-ba5e-b16db915254d', 'Communication', 'A4 Singhad planet
S No. 31 Abhinava Pharmacy College road Narhe', '411041');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6ce1dfe7-7107-4668-ba5e-b16db915254d', 'Permanent', 'A4 Singhad planet
S No. 31 Abhinava Pharmacy College road Narhe', '411041');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('016b334b-6fec-482e-896a-a7fadf97b613', 'CA/2016/73543', 'Mr', 'Aashima', NULL, 'Kathpalia', 'Female', '1992-06-26', NULL, NULL, '2016-01-20', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('016b334b-6fec-482e-896a-a7fadf97b613', 'Communication', 'H. No. 3077, Mahendra Park, Rani Bagh', '110034');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2fdf75e5-ec47-4ae2-bb8f-bd6b89438deb', 'CA/2016/73544', 'Mr', 'Shalini', NULL, 'Nag', 'Female', '1987-02-08', NULL, NULL, '2016-01-20', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2fdf75e5-ec47-4ae2-bb8f-bd6b89438deb', 'Communication', '2/1/A/1, Kalidas Lahiri Lane, Baranagar', '700036');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2fdf75e5-ec47-4ae2-bb8f-bd6b89438deb', 'Permanent', '2/1/A/1, Kalidas Lahiri Lane, Baranagar', '700036');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('794b5e84-b944-4ccd-ab77-78610fcf5f62', 'CA/2016/73545', 'Mr', 'Shantanu', NULL, 'Nag', 'Male', '1948-01-16', NULL, NULL, '2016-01-20', '2017-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('794b5e84-b944-4ccd-ab77-78610fcf5f62', 'Communication', 'FLAT 604, GATWAY CILLEGE OF ARCHITECTURE AND DESIGN, SECTOR 11,', '131001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('794b5e84-b944-4ccd-ab77-78610fcf5f62', 'Permanent', 'Flat 604, Gatway Cillege Of Architecture And Design, Sector 11,', '131001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('fd788af7-f7f9-4ef5-abec-84caa0789d4a', 'CA/2017/80848', 'Mr', 'Shrikant', 'Madhukar', 'Nikam', 'Male', '1990-08-11', 'ar.shreenikam@gmail.com', '9561629394', '2017-01-16', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fd788af7-f7f9-4ef5-abec-84caa0789d4a', 'Communication', 'NAMASHRI ATTAL BILDCON SAI CITY NEAR RACHANA PARK ROW HOUSE NO 02,BHAMANAGAR,KOPERGOAN -423601.', '423601');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('fd788af7-f7f9-4ef5-abec-84caa0789d4a', 'Permanent', 'S.S.S.K. LTD.SANJIVANI FACTORY,TAKLI.
D-178 D-TYPE SAMBJAI CHAWL,SANJIVANI COLONY, AT. PO. SHINGANAPUR TAL. KOPARGAON', '423601');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('8ccea909-dc00-491d-bc64-75abdeecfd72', 'CA/2017/80849', 'Mr', 'Vinod', 'Kumar', 'B S', 'Male', '1987-07-19', 'vinod1.ar@gmail.com', '8105704061', '2017-01-18', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8ccea909-dc00-491d-bc64-75abdeecfd72', 'Communication', 'S/O SHIVANNA BT, NO.203, THOPEGOWDARA PALYA, BIDANAGAR KUNIGAL WARD NO.1', '572130');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('8ccea909-dc00-491d-bc64-75abdeecfd72', 'Permanent', '#203, Thopegowdara Palya Binsanagele-1, Kunigal', '572130');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2a791a0b-cff0-44b7-b128-72267fa31ac7', 'CA/2017/80850', 'Mr', 'Madhuri', NULL, 'Kumar', 'Female', '1980-06-08', 'madhuri.kumar@gmail.com', '9663900449', '2017-01-18', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2a791a0b-cff0-44b7-b128-72267fa31ac7', 'Communication', '20/A, 5th cross, 35th main,
KAS Officers Layout,
BTM 2nd Stage', '560068');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2a791a0b-cff0-44b7-b128-72267fa31ac7', 'Permanent', '20/A, 5th cross, 35th main,
KAS Officers Layout,
BTM 2nd Stage', '560068');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e0e40127-18ed-4d2d-b099-581c888cfc8d', 'CA/2017/80851', 'Mr', 'Brijesh', 'Kumar', 'Balabantray', 'Male', '1990-12-29', 'kumar.brijesh900@gmail.com', '8826073301', '2017-01-18', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e0e40127-18ed-4d2d-b099-581c888cfc8d', 'Communication', 'C/o- Dr. Sitakanta Mishra
12-C, DDA flats, Pocket-2, Sector-6, Dwarka.', '110075');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e0e40127-18ed-4d2d-b099-581c888cfc8d', 'Permanent', 'Design Paradise Associates Pvt Ltd
C-46, Lower Ground Floor , Pamposh Enclave, Greater Kailash-1.', '110048');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a365b9fa-c074-4cc1-b59e-6f4cf04acb88', 'CA/2017/80852', 'Mr', 'Sheik', 'Abdur Rahman', 'F', 'Male', '1992-03-20', 'farookkamal@yahoo.com', '9443066265', '2017-01-18', '2018-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a365b9fa-c074-4cc1-b59e-6f4cf04acb88', 'Communication', '267,G.S.T Road,
Thiruparankundram', '625005');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a365b9fa-c074-4cc1-b59e-6f4cf04acb88', 'Permanent', '267,G.S.T Road,
Thiruparankundram', '625005');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b8915ae8-4d18-4bc8-9d70-8a3f74b0802f', 'CA/2018/100000', 'Mr', 'Svetha', NULL, 'S', 'Female', '1996-04-06', 'svethas07@gmail.com', '9629306079', '2018-12-08', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b8915ae8-4d18-4bc8-9d70-8a3f74b0802f', 'Communication', 'No 1A 204, Newry Shanmita Apartments, No21, Bharathiyar Street,
Jalladianpet, Pallikaranai', '600100');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b8915ae8-4d18-4bc8-9d70-8a3f74b0802f', 'Permanent', 'No 1A 204, Newry Shanmita Apartments, No21, Bharathiyar Street,
Jalladianpet, Pallikaranai', '600100');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3c3d1ad9-0961-4317-93f2-8a936379a29b', 'CA/2018/100001', 'Mr', 'PRIYANKA', 'VIJAY POORNIMA', 'SHETTY', 'Female', '1995-08-27', 'priya.shetty2808@gmail.com', '9702559959', '2018-12-08', '2029-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3c3d1ad9-0961-4317-93f2-8a936379a29b', 'Communication', 'ROOM NO.21, BWING, SURYAKIRAN HOUSING SOCIETY, TULSI PIPE ROAD, NEAR SARASWATI MANDIR HIGH SCHOOL, MAHIM MATUNGA WEST', '400016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3c3d1ad9-0961-4317-93f2-8a936379a29b', 'Permanent', 'ROOM NO.21, BWING, SURYAKIRAN HOUSING SOCIETY, TULSI PIPE ROAD, NEAR SARASWATI MANDIR HIGH SCHOOL, MAHIM MATUNGA WEST', '400016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('280c1dc9-5995-49c5-9c1a-611bda829e0b', 'CA/2018/100002', 'Mr', 'Shivani', NULL, 'Arora', 'Female', '1995-02-26', 'arora.shivani2412@gmail.com', '9828180472', '2018-12-08', '2019-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('280c1dc9-5995-49c5-9c1a-611bda829e0b', 'Communication', '44, SHASTRI NAGAR, OPP. PUMP HOUSE', '247001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('280c1dc9-5995-49c5-9c1a-611bda829e0b', 'Permanent', '44, shastri nagar, opp. pump house, saharanpur', '247001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3f22e793-5a7c-412d-9de6-aa9914190b58', 'CA/2018/100003', 'Mr', 'Varinder', NULL, 'Kumar', 'Male', '1993-09-07', 'varindernanna302@gmail.com', '7973348428', '2018-12-08', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3f22e793-5a7c-412d-9de6-aa9914190b58', 'Communication', '#64, BHAGWATI ENCLAVE , MULTANIA ROAD', '151001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3f22e793-5a7c-412d-9de6-aa9914190b58', 'Permanent', '#64, bhagwati enclave , multania road , bathinda.', '151001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('5630c47a-8858-49eb-b827-b2885c35fd0e', 'CA/2018/100004', 'Mr', 'Vaidehi', 'Anant', 'Deshmukh', 'Female', '1995-07-12', 'vaidehiadeshmukh@gmail.com', '8275745760', '2018-12-08', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5630c47a-8858-49eb-b827-b2885c35fd0e', 'Communication', 'PLOT NO.77, AASHIRWAD APARTMENT, FLAT NO.202, SWAVALAMBI NAGAR', '440022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('5630c47a-8858-49eb-b827-b2885c35fd0e', 'Permanent', 'PLOT NO.77, AASHIRWAD APARTMENT, FLAT NO.202, SWAVALAMBI NAGAR, NAGPUR', '440022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b93361a1-d839-41bb-b194-032db2dbb550', 'CA/2019/104391', 'Mr', 'Amandeep', 'Singh', 'Channa', 'Male', '1995-09-22', 'ar.amandeepsingh95@gmail.com', '9873948873', '2019-01-21', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b93361a1-d839-41bb-b194-032db2dbb550', 'Communication', 'M-52, 2ND FLOOR, HARI NAGAR,', '110064');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b93361a1-d839-41bb-b194-032db2dbb550', 'Permanent', 'M-52, 2nd Floor, Hari Nagar, New Delhi-110064', '110064');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bbe74695-41e2-4ef1-9790-4e2d292f6930', 'CA/2019/104392', 'Mr', 'Jibran', 'Gulamnabi Mamuna', 'Khokar', 'Male', '1991-04-09', 'jibran_nabi@hotmail.com', '8080253153', '2019-01-23', '2020-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bbe74695-41e2-4ef1-9790-4e2d292f6930', 'Communication', '301 ACCOST APT,OPP BANK OF BARODA, PALI NAKA,BANDRA WEST,', '400050');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bbe74695-41e2-4ef1-9790-4e2d292f6930', 'Permanent', '301 accost apt,opp bank of baroda, pali naka,bandra west, mumbai 400050', '400050');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('90dd1816-bcec-4e07-bb24-b874a8a45e23', 'CA/2019/104393', 'Mr', 'Faiz Haidar', 'Faiyaz Husain', 'Shaikh', 'Male', '1993-03-21', 'spacedezaina@gmail.com', '8887837764', '2019-01-23', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90dd1816-bcec-4e07-bb24-b874a8a45e23', 'Communication', '8/126, VISHAL CITY, BEGHARIYA RAOD
DUBAGGA', '226003');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('90dd1816-bcec-4e07-bb24-b874a8a45e23', 'Permanent', '8/126, Vishal City, Near Jio Tower, Beghariya Road, Dubagga', '226003');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b1d2eb77-43e1-4cea-a01d-a41c4d3316f7', 'CA/2019/104394', 'Mr', 'Sanjukta', NULL, 'Das', 'Female', '1988-10-21', 'sanjukta.star22@gmail.com', '9987334038', '2019-01-23', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b1d2eb77-43e1-4cea-a01d-a41c4d3316f7', 'Communication', 'H.NO-6, JANAPATH, BAKRAPARA, KHANAPARA,', '781022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b1d2eb77-43e1-4cea-a01d-a41c4d3316f7', 'Permanent', 'H.NO-6, JANAPATH, BAKRAPARA, KHANAPARA, GUWAHATI', '781022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b4fc54d5-8dc5-47b2-8cf0-254e1a9dcf64', 'CA/2019/104395', 'Mr', 'Tanaya', 'Ravi', 'Kadam', 'Female', '1993-09-19', 'tanaya.kadam93@gmail.com', '9922150709', '2019-01-23', '2030-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b4fc54d5-8dc5-47b2-8cf0-254e1a9dcf64', 'Communication', 'Shrikant,37,Mangalwadi Soceity, Senapati Bapat road.', '411016');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b4fc54d5-8dc5-47b2-8cf0-254e1a9dcf64', 'Permanent', 'Vasundara,21,Mangalwadi Soceity, Senapati Bapat road.', '411016');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('b5cc4a2b-01db-475d-ad80-28b6d9bc186f', 'CA/2020/118441', 'Mr', 'Gargi', 'Sanjay Sarla', 'Thakur', 'Female', '1991-12-11', 'gargi.arc@gmail.com', '9820191588', '2020-01-09', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b5cc4a2b-01db-475d-ad80-28b6d9bc186f', 'Communication', 'H23 101 Indraprasth CHS ltd Near Pratikshanagar BESt Depot Pratikshanagar', '400022');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('b5cc4a2b-01db-475d-ad80-28b6d9bc186f', 'Permanent', 'H23 101 Indraprasth CHS ltd Near Pratikshanagar BESt Depot Pratikshanagar', '400022');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('63c1c419-e56e-4f4f-a062-68eec339082f', 'CA/2020/118442', 'Mr', 'HIMANSHU', NULL, 'SENGAR', 'Male', '1992-07-24', 'himanshusengar.9@gmail.com', '9752477596', '2020-01-09', '2031-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('63c1c419-e56e-4f4f-a062-68eec339082f', 'Communication', '49- A SHRIYANTRA NAGAR,
NEAR QUEENS COLLEGE,
KHANDWA ROAD', '452012');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('63c1c419-e56e-4f4f-a062-68eec339082f', 'Permanent', '49- A SHRIYANTRA NAGAR,
NEAR QUEENS COLLEGE,
KHANDWA ROAD', '452012');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('df7cf7b0-ba79-4cf0-9471-6b7f0f77e75c', 'CA/2020/118443', 'Mr', 'SNEHA', NULL, 'ARVIND', 'Female', '1992-05-20', 'sneha_arvind@hotmail.com', '9845811530', '2020-01-09', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('df7cf7b0-ba79-4cf0-9471-6b7f0f77e75c', 'Communication', 'L-33, Shriram Sadhana Apartments, Off. MS Ramaiah Rd, HMR Layout, Gokula Extension, Mathikere', '560054');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('df7cf7b0-ba79-4cf0-9471-6b7f0f77e75c', 'Permanent', 'L-33, Shriram Sadhana Apartments, Off. MS Ramaiah Rd, HMR Layout, Gokula Extension, Mathikere', '560054');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1922ea9c-40b2-471c-af55-76b05c117425', 'CA/2020/118444', 'Mr', 'Arushi', NULL, 'Rana', 'Female', '1994-08-25', 'aashi.rana@gmail.com', '9910004207', '2020-01-09', '2033-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1922ea9c-40b2-471c-af55-76b05c117425', 'Communication', 'House Number 10 Rangpuri', '110037');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1922ea9c-40b2-471c-af55-76b05c117425', 'Permanent', 'House Number 10 Rangpuri', '110037');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6d75cd37-6f02-4ed1-8109-cfbb74036b77', 'CA/2020/118445', 'Mr', 'Manya', NULL, 'Walia', 'Female', '1995-03-11', 'manya.w@hotmail.com', '9811868083', '2020-01-09', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d75cd37-6f02-4ed1-8109-cfbb74036b77', 'Communication', 'A-591, Sushant Lok Phase I', '122002');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6d75cd37-6f02-4ed1-8109-cfbb74036b77', 'Permanent', 'A-591, Sushant Lok Phase I', '122002');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('17a99c14-9381-488d-8fcc-4b66e2630ffd', 'CA/2021/127006', 'Mr', 'Subithya', 'S', '', 'Female', '1996-06-26', 'subithyasuresh27@gmail.com', '8075746889', '2021-01-11', '2022-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('17a99c14-9381-488d-8fcc-4b66e2630ffd', 'Communication', 'VASUDEVAM
BTR NAGAR
PERIYAR COLONY', '641652');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('17a99c14-9381-488d-8fcc-4b66e2630ffd', 'Permanent', 'VASUDEVAM
BTR NAGAR
PERIYAR COLONY', '641652');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1b503aec-be9f-48a2-b23b-70e012d04d8e', 'CA/2021/127007', 'Mr', 'DHARMARAJAN', NULL, 'J', 'Male', '1996-09-30', 'rdharma77@gmail.com', '8667810259', '2021-01-11', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1b503aec-be9f-48a2-b23b-70e012d04d8e', 'Communication', '80/18,Ramalakshmi Nagar,3rd street,k.Pudhur', '625007');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1b503aec-be9f-48a2-b23b-70e012d04d8e', 'Permanent', '4/730-1,Mahalakshmi nagar 3rd street,Moondrumavadi to Iyerbungalow road', '625007');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1dc2d30a-e3b4-4674-880c-2a05154d3474', 'CA/2021/127008', 'Mr', 'THAMIZHPONNI', NULL, 'M', 'Female', '1997-06-19', 'thamizhmathiarch@gmail.com', '8838298869', '2021-01-11', '2022-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1dc2d30a-e3b4-4674-880c-2a05154d3474', 'Communication', '2/199,South street,Koonancherry,Papanasam Taluk, Pullaboothangudi post', '612301');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1dc2d30a-e3b4-4674-880c-2a05154d3474', 'Permanent', '2/199,South street,Koonancherry,Papanasam Taluk, Pullaboothangudi post', '612301');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e53c4469-4c79-42ee-9626-4ba536f15d46', 'CA/2021/127009', 'Mr', 'Monisha', 'N', '', 'Female', '1993-01-23', 'nandini.monisha24@gmail.com', '7019877767', '2021-01-11', '2032-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e53c4469-4c79-42ee-9626-4ba536f15d46', 'Communication', 'B-1009,Godrej platinum,  International Airport Road, Hebbal Kempapura, Bengaluru, Karnataka 560024.', '560094');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e53c4469-4c79-42ee-9626-4ba536f15d46', 'Permanent', 'B-1009,Godrej platinum,  International Airport Road, Hebbal Kempapura, Bengaluru, Karnataka 560024.', '560094');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e9799bc5-8599-409b-ae97-43c7078be3e0', 'CA/2021/127010', 'Mr', 'Gaurav', NULL, 'Yadav', 'Male', '1996-06-29', 'gy9650775455@gmail.com', '7042547605', '2021-01-11', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e9799bc5-8599-409b-ae97-43c7078be3e0', 'Communication', 'HOUSE-1, 1ST FLOOR, K BLOCK, SECTOR 83, GURUGRAM', '122004');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e9799bc5-8599-409b-ae97-43c7078be3e0', 'Permanent', 'RZG-559C, RAJNAGAR PART 2, PALAM COLONY, SOUTH WEST', '110077');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('e197ce8d-104c-47ab-beba-12f25d27865e', 'CA/2022/141078', 'Mr', 'Rishabh', NULL, 'Joshi', 'Male', '1997-02-10', 'rj33mason@gmail.com', '7838043066', '2022-01-29', '2035-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e197ce8d-104c-47ab-beba-12f25d27865e', 'Communication', 'C-25, H.1.B., Shalimar garden', '201005');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('e197ce8d-104c-47ab-beba-12f25d27865e', 'Permanent', 'C-25, H.1.B., Shalimar garden', '201005');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('d78a3849-02ca-4bc8-9afb-5a43acf668a8', 'CA/2022/141079', 'Mr', 'Pandhi', 'Kavya', 'Shree', 'Female', '1993-10-23', 'kavya.sree91@gmail.com', '9100246588', '2022-02-18', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d78a3849-02ca-4bc8-9afb-5a43acf668a8', 'Communication', 'H.NO:17-2-258/1/A, KURMAGUDA, SAIDABAD', '500059');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('d78a3849-02ca-4bc8-9afb-5a43acf668a8', 'Permanent', 'H.NO:17-2-258/1/A, KURMAGUDA, SAIDABAD', '500059');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('bcbebaae-c6d9-4531-bf14-eb3cdc0d05d2', 'CA/2022/141080', 'Mr', 'Vignesh', 'K', 'G', 'Male', '1995-09-11', 'kgvignesh95@gmail.com', '9940836042', '2022-02-18', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bcbebaae-c6d9-4531-bf14-eb3cdc0d05d2', 'Communication', '46,KPN COLONY ,1ST STREET,', '641601');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('bcbebaae-c6d9-4531-bf14-eb3cdc0d05d2', 'Permanent', '46,KPN COLONY ,1ST STREET,', '641601');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('01b8e6fe-c2b3-4016-9ed0-2664b1fc209d', 'CA/2022/141081', 'Mr', 'Irene', NULL, 'Sarah', 'Female', '1996-04-23', 'ireneannsarah@gmail.com', '9916195562', '2022-02-18', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('01b8e6fe-c2b3-4016-9ed0-2664b1fc209d', 'Communication', 'A4012, DLF Westend Height, Westend Avenue, Akshaynagar', '560076');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('01b8e6fe-c2b3-4016-9ed0-2664b1fc209d', 'Permanent', 'A4012, DLF Westend Height, Westend Avenue, Akshaynagar', '560076');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('43577782-325d-4256-bb4b-ca07633ac6f6', 'CA/2022/141082', 'Mr', 'Anurag', NULL, 'Saini', 'Male', '1993-07-09', 'anuragsn1@gmail.com', '9467208899', '2022-02-18', '2023-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('43577782-325d-4256-bb4b-ca07633ac6f6', 'Communication', 'H.NO- OB71, GROUND FLOOR, CHD CITY, SECTOR-45', '132001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('43577782-325d-4256-bb4b-ca07633ac6f6', 'Permanent', 'H.NO- OB71, GROUND FLOOR, CHD CITY, SECTOR-45', '132001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('3dcd7928-b01e-4071-a23d-6a820f6ac4ff', 'CA/2023/154487', 'Mr', 'SRUTHI', NULL, 'ROSE', 'Female', '1997-08-22', 'sruthirose2k17@gmail.com', '9080883361', '2023-01-05', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3dcd7928-b01e-4071-a23d-6a820f6ac4ff', 'Communication', '45,SUBBULAKSHMI NAGAR 4TH STREET, KUNIYAMUTHUR', '641008');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('3dcd7928-b01e-4071-a23d-6a820f6ac4ff', 'Permanent', '45,SUBBULAKSHMI NAGAR 4TH STREET, KUNIYAMUTHUR', '641008');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('ab3e84fa-3fcb-4cfb-8c5c-7e9cd740ef0f', 'CA/2023/154488', 'Mr', 'Vishal', 'Manish Meera', 'Doshi', 'Male', '1996-01-29', 'VISHAL.DOSHI1213@GMAIL.COM', '9819530196', '2023-01-05', '2024-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ab3e84fa-3fcb-4cfb-8c5c-7e9cd740ef0f', 'Communication', 'B-807 Raj Residency 2, 
Mahavir Nagar,
Kandivali West.', '400067');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('ab3e84fa-3fcb-4cfb-8c5c-7e9cd740ef0f', 'Permanent', 'B-807 Raj Residency 2, 
Mahavir Nagar,
Kandivali West.', '400067');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('348ef0db-606c-49b0-9532-2bc05c9c2210', 'CA/2023/154489', 'Mr', 'SUSHMA', NULL, 'R', 'Female', '1998-06-24', 'rrsushma@gmail.com', '8903845396', '2023-01-05', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('348ef0db-606c-49b0-9532-2bc05c9c2210', 'Communication', '6-83/A2, Keezhkarai,
Mondaikadu, MANAVALAKURICHI', '629252');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('1a97bca8-8e44-414d-8340-d4fe0a86ae65', 'CA/2023/154490', 'Mr', 'PARTH', 'PRAMOD PURVA', 'TAKALE', 'Male', '1996-10-11', 'takaleparth@gmail.com', '7715991656', '2023-01-05', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1a97bca8-8e44-414d-8340-d4fe0a86ae65', 'Communication', 'NEAR MURLIDHAR MANDIR, VANI ALI', '415605');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('1a97bca8-8e44-414d-8340-d4fe0a86ae65', 'Permanent', 'NEAR MURLIDHAR MANDIR, VANI ALI', '415605');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0e1c980b-cd66-4bf4-bfd9-0c5626ca95a1', 'CA/2023/154491', 'Mr', 'KHUSBOO', 'DEEPAK', 'KESARI', 'Female', '1997-01-23', 'merakstudios@gmail.com', '8329263071', '2023-01-05', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0e1c980b-cd66-4bf4-bfd9-0c5626ca95a1', 'Communication', 'Khushboo Rajput , 516-B Manglam Tarang , 200 ft Bypass Road , Muhana mandi , Jaipur , 302029', '302029');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0e1c980b-cd66-4bf4-bfd9-0c5626ca95a1', 'Permanent', 'maharani avantibai intercollege girls school, jagner road , dhanauli', '282001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a48bee21-decf-4973-afb0-7d9fc763829a', 'CA/2024/168388', 'Mr', 'PARINA', 'BIREN', 'SHAH', 'Female', '1997-10-01', 'parinashah47@gmail.com', '8980446168', '2024-01-04', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a48bee21-decf-4973-afb0-7d9fc763829a', 'Communication', '5/B KapilKunj Society, Near Naranpura Railway Crossing', '380013');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a48bee21-decf-4973-afb0-7d9fc763829a', 'Permanent', '5/B KapilKunj Society, Near Naranpura Railway Crossing', '380013');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('36665523-669a-4d07-8ff8-be4c938805e8', 'CA/2024/168389', 'Mr', 'SMRUTI', 'G', 'MUNAVALLI', 'Female', '1999-02-14', 'smrutimunavalli99@gmail.com', '7899525124', '2024-01-04', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('36665523-669a-4d07-8ff8-be4c938805e8', 'Communication', 'WE-408, Shriram Smrithi Apartments, Bidaraguppe Village, Attibele-Sarjapura Road', '562107');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('36665523-669a-4d07-8ff8-be4c938805e8', 'Permanent', 'WE-408, Shriram Smrithi Apartments, Bidaraguppe Village, Attibele-Sarjapura Road', '562107');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('065fba8d-fe30-4aa4-9950-2d1d56ca29dc', 'CA/2024/168390', 'Mr', 'JOHN', 'ALEX', 'SINJO', 'Male', '1998-10-01', 'joesinjo@gmail.com', '9632608211', '2024-01-04', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('065fba8d-fe30-4aa4-9950-2d1d56ca29dc', 'Communication', '7F, Noel Ecoden, Vallathol Padi, Judgemukku, Thrikkakara, Edappally, Ernakulam, Kochi, Kerala 682021', '682021');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('065fba8d-fe30-4aa4-9950-2d1d56ca29dc', 'Permanent', '7F, Noel Ecoden, Vallathol Padi, Judgemukku, Thrikkakara, Edappally', '682021');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('9cd4c3b3-1fcd-44ea-b91f-1b78df50a4f8', 'CA/2024/168391', 'Mr', 'JAITA', NULL, 'SARKAR', 'Female', '1995-02-06', 'sarkarjaita721995@gmail.com', '8447953310', '2024-01-04', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9cd4c3b3-1fcd-44ea-b91f-1b78df50a4f8', 'Communication', 'FCA 907/A BLOCK- C SGM NAGAR', '121001');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('9cd4c3b3-1fcd-44ea-b91f-1b78df50a4f8', 'Permanent', 'FCA 907/A BLOCK- C SGM NAGAR', '121001');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('f9c19b28-f8c1-454f-84ba-0fd3caf568f9', 'CA/2024/168392', 'Mr', 'Apeksha', NULL, 'Prabhu K', 'Female', '1998-08-01', 'apekshaprabhu17@gmail.com', '9742369042', '2024-01-04', '2025-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f9c19b28-f8c1-454f-84ba-0fd3caf568f9', 'Communication', '4095 , 9th floor , tower 4 , Golden Panorama , Off 80 Feet Kanakapura Road , Gubbalala', '560061');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('f9c19b28-f8c1-454f-84ba-0fd3caf568f9', 'Permanent', '4095 , 9th floor , tower 4 , Golden Panorama , Off 80 Feet Kanakapura Road , Gubbalala', '560061');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('0d8d1a32-b6cf-469c-a198-7fce6f02284d', 'CA/2025/182397', 'Mr', 'Kavana', 'V', 'Rao', 'Female', '1999-08-17', 'kavanavrao@gmail.com', '9933877773', '2025-01-02', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d8d1a32-b6cf-469c-a198-7fce6f02284d', 'Communication', '8-2, Padmavathi Sadan near Jodkatte, Hiriadka post, Udupi dist and tq', '576113');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('0d8d1a32-b6cf-469c-a198-7fce6f02284d', 'Permanent', '8-2, Padmavathi Sadan near Jodkatte, Hiriadka post, Udupi dist and tq', '576113');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('288ae13a-29f5-4d81-a238-e68445bee9f2', 'CA/2025/182398', 'Mr', 'YASHWANTH', NULL, 'V', 'Male', '2001-04-11', 'yashrocking1234@gmail.com', '9791195649', '2025-01-02', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('288ae13a-29f5-4d81-a238-e68445bee9f2', 'Communication', 'No1 vasanth Nagar annex, anna street, kovilpadagai', '600062');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('288ae13a-29f5-4d81-a238-e68445bee9f2', 'Permanent', 'No1 vasanth Nagar annex, anna street, kovilpadagai', '600062');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('2722c837-bb85-4d9b-9a79-f97addf66151', 'CA/2025/182399', 'Mr', 'SARTHAK', 'BALU', 'SANGALE', 'Male', '1999-11-30', 'sarthaksangale1999@gmail.com', '7745094253', '2025-01-02', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2722c837-bb85-4d9b-9a79-f97addf66151', 'Communication', 'SAMRUDDHI BANGLOW, GAJANAN CHOOK, VIJAY NAGAR, SINNAR', '422103');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('2722c837-bb85-4d9b-9a79-f97addf66151', 'Permanent', 'SAMRUDDHI BANGLOW, GAJANAN CHOOK, VIJAY NAGAR, SINNAR', '422103');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('6dc5d0a4-be99-4e29-b6b8-90ac4a3bada2', 'CA/2025/182400', 'Mr', 'SALONI', 'PRASHANT SWATI', 'PAWAR', 'Female', '1999-10-19', 'pawar.saloni20999@gmail.com', '8355825457', '2025-01-02', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6dc5d0a4-be99-4e29-b6b8-90ac4a3bada2', 'Communication', '204,Narmada,Jangid Complex, mira rooad east', '401104');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('6dc5d0a4-be99-4e29-b6b8-90ac4a3bada2', 'Permanent', '204,Narmada,Jangid Complex, Mira Rooad East', '401104');

INSERT INTO architect_profiles (id, registration_number, title, first_name, middle_name, last_name, gender, dob, email, mobile, registration_date, validity_date, registration_status)
VALUES ('a530bd1f-4659-4f24-b5bc-127a67fdf4b1', 'CA/2025/182401', 'Mr', 'Gurleen', NULL, 'Kaur', 'Female', '1994-04-08', 'ar.gurleendoel@gmail.com', '8194855800', '2025-01-02', '2026-12-30', 'Active')
ON CONFLICT (registration_number) DO NOTHING;

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a530bd1f-4659-4f24-b5bc-127a67fdf4b1', 'Communication', '768, Urban Estate,
Phase-1, near Neel Kanth Mandir', '144601');

INSERT INTO architect_addresses (profile_id, address_type, address_line1, pincode)
VALUES ('a530bd1f-4659-4f24-b5bc-127a67fdf4b1', 'Permanent', '768, Urban Estate,
Phase-1, near Neel Kanth Mandir', '144601');
COMMIT;