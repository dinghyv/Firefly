---
title: "常用SQL/Linux语句"
published: 2025-09-06
draft: false
description: "常用SQL/Linux语句"
tags: ["ZF", "实施"]
category: "技术"
image: "./featured.png"
---

# SQL/Linux语句

## 表空间

### 1. 查询所有表空间

```sql
SELECT
    tablespace_name,
    status,
    contents,
    logging
FROM
    dba_tablespaces
ORDER BY
    tablespace_name;
```



### 2. 创建表空间

```sql
CREATE TABLESPACE zfclob DATAFILE '/u01/oracle/oradata/zfclob01.dbf' SIZE 10240m;

create smallfile tablespace zfclob datafile '/u01/app/oracle/oradata/orcl/zfclob.dbf' size 1024m autoextend on next 10240K maxsize unlimited logging extent management local segment space management auto;
```



## 用户

### 1. 查询所有用户

```sql
SELECT
    username,
    default_tablespace,
    temporary_tablespace
FROM
    dba_users
ORDER BY
    username;
```



### 2. 创建用户

```sql
create user jw_user identified by jw_user_pyzy default tablespace zf temporary tablespace temp profile DEFAULT quota unlimited on zf;
```

`jw_user_pyzy` 是密码，要求使用8位以上、包含字符、数字和字母的强密码 。



## 导入dmp

```sql
imp JAVAJW/ZFSoft123 file=/home/oracle/utf-8-javajw_cshV9.0.4-20240531.dmp full=y log=import.log
```



## Linux命令

### 1.查看所有tomcat进程

此命令用于检查Tomcat对应的Java进程是否正在运行。

```bash
ps -ef | grep tomcat
```

**说明**：该命令会列出系统所有正在运行的进程，并通过`grep`过滤出包含“tomcat”关键字的行，从而找到Tomcat进程的详细信息。



### 2. 捕获教务系统实时查看日志

此命令用于实时监控Tomcat的`catalina.out`日志文件，观察应用的运行状态和错误信息。

```bash
tail -f /usr/local/zhengfang/dist-deluxe-v1/logs/catalina.out
```

**说明**：

- 该命令使用`tail -f`来持续监控并显示文件末尾的最新内容。

- 路径

  `/usr/local/zhengfang/dist-deluxe-v1/logs/`是`dist-deluxe`包中Tomcat容器存放日志文件的标准位置 。

  

### 3. 启动教务系统的语句（日志打印在前台）

此命令用于在前台模式下启动Tomcat，所有日志会直接输出到当前屏幕，便于实时调试。

```bash
/usr/local/zhengfang/dist-deluxe-v1/server/bin/catalina.sh run
```

**说明**：

- 该命令直接调用Tomcat的核心启动脚本`catalina.sh` 。
- `run`参数使其在前台运行，而不是在后台。这对于捕获启动瞬间的错误信息非常有用。



## 日常用到的

### 控制功能模块是否启用

```sql
select * from jw_jh_zdxxkzb where GNMKDM = 'N153005'and BZ = '是否专业开放课程'
select * from jw_jh_zdxxkzb where GNMKDM = 'N153005'and BZ like '%开放%'

for update 
```

### 删除配课记录



```sql
delete
FROM jw_xk_xsxkb t
WHERE t.xh_id IN (
  SELECT xh_id
  FROM jw_xjgl_xsxjxxb
  WHERE xnm = '2025' AND xqm = '12'
    AND bh_id = (
      -- 根据班级名称查询 bh_id
      SELECT BH_ID FROM zftal_xtgl_bjdmb WHERE BJ = '计科2501班'
    )
);

delete
FROM jw_xk_pksbyyb t
WHERE t.xh_id IN (
  SELECT xh_id
  FROM jw_xjgl_xsxjxxb
  WHERE xnm = '2025' AND xqm = '12'
    AND bh_id = (
      -- 根据班级名称查询 bh_id
      SELECT BH_ID FROM zftal_xtgl_bjdmb WHERE BJ = '计科2501班'
    )
);

commit
```

### 教学任务设置添加可修改字段

```sql
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'jxbmc', '教学班名称', 'jw_jxrw_jxbxxb', 1, '1', '50', '', 2, 'basedata:isNot');
```



## Nginx

vim /u01/nginx/nginx/conf/nginx.conf





## TXT

### 新项目部署后参数设置

select * from jw_jcdml_xtnzb where zs||bz like '%教学班生成方式%' for update
select * from jw_jcdml_xtnzb where zs||bz like '%配课关联任务面向对象开关%' for update
select * from  jw_jcdml_xtnzb where zs||bz like '%板块课配课方式%' for update
select * from  jw_jcdml_xtnzb where zs||bz like '%开课部门取值方式%' for update
select * from  jw_jcdml_xtnzb where zs||bz like '%学分取值方式%' for update

Q：课程信息字段设置
select * from JW_JH_KCXXXGCXZDSQB

Q 成绩录入设置中不出现教学班记录
1.学时代码为空或者教学班分项比例设置中未设置比例或者“是否过程管理”列为空
2.--------换教师导致成绩录入教师丢失，把sfcjlrjs改成1
select * from jw_jxrw_jxbjsrkb where jxb_id in (select jxb_id from jw_jxrw_jxbjsrkb where jxb_id in (select jxb_id from jw_jxrw_jxbxxb where xnm='2023' and xqm='12') group by jxb_id having count(*)=1)
and sfcjlrjs='0' for update

Q 修改数据库服务器时区/时间
timedatectl set-timezone Asia/Shanghai   
timedatectl set-time '2024-03-13 11:24:30'


 date -s   '2024-03-13 11:24:30'


Q成绩录入后，需要删掉教学班中的成绩
1.保存状态删掉jw_cj_xscjb_ls和jw_cj_xmcjb
   提交状态删掉jw_cj_xscjb和jw_cj_xmcjb

Q人机交互排课排时间或者场地时没有从第一周开始排
1.看下排课日周次的第一周中是否包含星期一


Q.成绩替代后发现替代后的课程的绩点为空或者有误
1.修改jw_cj_xsgrjhdtb表

Q.成绩总表没有考虑课程替代以及学分认定
select * from jw_bygl_cjzbgsxxb where xxdm='13687' for update;
select * from jW_BYGL_CJZBDYSZXXXB where xxdm='13687' for update

Q.表空间扩容
SELECT UPPER(F.TABLESPACE_NAME)         "表空间名",
       D.TOT_GROOTTE_MB                 "总空间大小(M)",
       D.TOT_GROOTTE_MB - F.TOTAL_BYTES "已使用空间大小(M)",
       TO_CHAR(ROUND(( D.TOT_GROOTTE_MB - F.TOTAL_BYTES ) / D.TOT_GROOTTE_MB * 100, 2), '990.99')
       || '%'                           "空间使用率",
       F.TOTAL_BYTES                    "剩余空间(M)",
       F.MAX_BYTES                      "最大块大小(M)"
FROM   (SELECT TABLESPACE_NAME,
               ROUND(SUM(BYTES) / ( 1024 * 1024 ), 2) TOTAL_BYTES,
               ROUND(MAX(BYTES) / ( 1024 * 1024 ), 2) MAX_BYTES
        FROM   SYS.DBA_FREE_SPACE
        GROUP  BY TABLESPACE_NAME) F,
       (SELECT DD.TABLESPACE_NAME,
               ROUND(SUM(DD.BYTES) / ( 1024 * 1024 ), 2) TOT_GROOTTE_MB
        FROM   SYS.DBA_DATA_FILES DD
        GROUP  BY DD.TABLESPACE_NAME) D
WHERE  D.TABLESPACE_NAME = F.TABLESPACE_NAME
ORDER  BY 1;

--select * from dba_data_files where tablespace_name='ZF'

--alter database datafile '/u01/oracle/oradata/zf02.dbf' resize 30g;              ----扩容文件
--alter tablespace zf add datafile '/u01/oracle/oradata/zf04.dbf' size 20G;    ----增加文件

Q.数据库闪回
alter table 表名 enable row movement;--必须先执行
flashback table 表名 to timestamp to_timestamp('2022-12-08 09:35:00','yyyy-mm-dd hh24:mi:ss');
alter table 表名 disable row movement;--必须执行

Q.授予数据库只读权限的账号
--最高权限的只读用户 zfsoft_zd
--创建用户
create user zfsoft_zd
  identified by Zfsoft123_zd
  default tablespace ZF
  temporary tablespace TEMP
  profile DEFAULT;
--授权
  grant connect to zfsoft_zd;
  grant select any table to zfsoft_zd; 
--函数授权
grant execute on 函数名 to zfsoft_zd

Q.成绩录入状态由保存改成录入状态
delete from jw_cj_xscjb_ls where jxb_id='F52096F8C85C1EB9E05347640A0AEBE0'
delete from jw_cj_xmcjb where jxb_id='F52096F8C85C1EB9E05347640A0AEBE0'

Q.成绩已经录入，要把学生从选课名单中删除

Q.学生选课时按分钟查看选课人数
select * from (select substr(xksj,1,16) aa,count(*) from jw_xk_xsxkb group by substr(xksj,1,16) )where aa >='2023-09-12 12:00' order by aa desc

Q服务器防火墙
firewall-cmd --state
------如果是running，则依次执行以下两条语句
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --reload

1配课失败原因不对
删除表JW_XK_PKSBYYB，重新配

1刷新配课是更新jxbhbxxb的pkgs



1生成配课的刷新配课是什么作用
更新jxbhbxxb的pkgs 
先点下，再配课 下面的配课人数如果不符合的情况下

1 配课的配不上显示配课成功		 xk_tjkbpk_1
1)这个教学班学时是空的;rwxzx,xsdm不能为空,sfzjxb要为1
select sfzjxb from jw_jxrw_jxbxxb whre sfzjxb='1' 是否主教学班要为1;
select sfzjxb,rwzxs,xsdm,sfkxk,sfxkbj,bpkbj from jw_jxrw_jxbxxb where xnm||xqm='20213' and jxbmc=''
2)学生专业方向和课程专业方向不一致(查一下合班信息表）;
3)学生没报到注册,
select*from zftal_xtgl_xtszb where zs like '%配课%' or bz like'%配课%';
4)人数为0
5)主教学班生成了，子教学班没生成（先把主教学班的选课数据删除）
6)教学班容量满了
7）设置了不排课，教学班信息表sksj又有值，去判断上课时间了
8）表空间不够
9）jw_jxrw_jxbhbxxb --zh字段清空 迁移数据
10）zyh_id中间不能有下划线_  像530102_A就不行



2生成配课提示生成配课失败
xk_tjkbkcpk_1编译失败

2删除配课数据
select*from jw_xk_xsxkb where xnm||xqm='202112' and xkbj='20' and xksj like '%2022-02-18 %' and jgh_id='admin'
select*from jw_xk_xsxkb_0218
delete from jw_xk_xsxkb where xnm||xqm='202112' and xkbj='20' and xksj like '%2022-02-18 %' and jgh_id='admin'

2配课设置默认生成教材		
select*from jw_jcdml_xtnzb where  zdm='BXLKEMRYDJC'


2配课界面不显示教学班		
课程性质为选修
select*from jw_jcdml_xtnzb where  zdm='PKKCXZ'
所有选修都要配的话就设置成bx,xx|
部分选修课的话后面跟上课程性质代码
bx|05,06,07,13,27
update jw_jcdml_xtnzb set zdz='bx,xx|' where  zdm='PKKCXZ';
commit;

3配课不想配不在校学生，内置表设置
select*from  zftal_xtgl_xtszb  where zdm='WZCXSBKPK' ;
update zftal_xtgl_xtszb set zdz='1' where zdm='WZCXSBKPK' ;
commit;

4配课未配的学生提示已配入其他教学班		
之前学年学期有选课还有成绩

5待配课查询很慢

解决方法：
先检查下以下两个索引是否有，没有的话加一下
create index JW_JXRW_JXBHBXXB_KCXZ on JW_JXRW_JXBHBXXB (KCXZDM);
create index IDX_JW_XSXJXXB_XN_1 on JW_XJGL_XSXJXXB (XNM, XQM, NJDM_ID, ZYH_ID, BH_ID);

加了索引后，也没用，需要分析以下表
analyze table jw_xjgl_xsxjxxb compute statistics;
analyze table jw_xk_xsxkb compute statistics;
analyze table jw_jxrw_jxbxxb compute statistics;
analyze table jw_jxrw_jxbhbxxb compute statistics;
analyze table jw_xk_xspkztb compute statistics;
analyze table jw_xk_xsxkpklsb compute statistics;


Q.数据迁移后绩点批量刷新
update jw_cj_xscjb set jd=(round(bfzcj,0)-50)/10 where bfzcj>=60

Q：学生学业情况查询提示当前所在专业没有教学执行计划
---------专业方向为空的改成wfx
update jw_jh_jxzxjhkcxxb set zyfx_id='wfx' where zyfx_id is null;
update jw_jh_pyfakcxxb set zyfx_id='wfx' where zyfx_id is null;
update jw_jh_jxzxjhxfyqxxb set zyfx_id='wfx' where zyfx_id is null;
update jw_jh_pyfaxfyqxxb set zyfx_id='wfx' where zyfx_id is null;
update jw_jh_jxzxjhxfyqxxb set YQZDXF='0' where YQZDXF is null;
update jw_jh_pyfaxfyqxxb set YQZDXF='0' where YQZDXF is null;
update jw_jh_jxzxjhkcyxxdxnxqb set zyfx_id='wfx' where zyfx_id is null;
update jw_xjgl_xsjbxxb set zyfx_id='wfx' where zyfx_id is null;
update jw_xjgl_xsxjxxb set zyfx_id='wfx' where zyfx_id is null;

Q：授课计划清空--盐城师范
select  * from jw_jxrw_jxbxxb where jxbmc='(2023-2024-1)-1174100980-02'
delete from jw_jh_jsjxrljcb where jxb_id='FE83FF2A74642F42E0530100007FBE4A' 
delete from jw_jh_jsjxrlsjb where jxb_id='FE83FF2A74642F42E0530100007FBE4A'
delete from jw_jh_jsjxrlb where jxb_id='FE83FF2A74642F42E0530100007FBE4A'

Q：学籍异动申请页面zdxxkzb
必填字段控制：select * from jw_xjgl_xjydzdxxkzb  where gnmkdm='N102008'，
字段参考select * from jw_xj_zdxxkzb where gnmkdm='N102020';

Q:节次截取并且行转列
1-2,4-6 
变成
1-2
4-6  
select fn_jqzd(t1.jcmc,',',t2.rn) from v_jssykb_1 t1,
(select rownum rn from zftal_xtgl_jcsjb where rownum <=10) t2
where fn_jsfgfs(t1.jcmc,',') +1 >= t2.rn 

Q：学校学生专业所属学院调整，需要清洗的数据

--------涉及到的表
zftal_xtgl_zydmb
zftal_xtgl_bjdmb
jw_xjgl_xsjbxxb 
jw_xjgl_xsxjxxb 
jw_jh_kcdmb
jw_jh_pyfakcxxb
jw_jh_jxzxjhkcxxb
jw_jxrw_jxbxxb
jw_jg_jzgxxb ---主要看教学秘书，教学院长等需要参与审批的人员以及他们的数据归属范围（学生、教师、课程）


-------------备份--------
create table zftal_xtgl_bjdmb20231102 as select * from zftal_xtgl_bjdmb
create table jw_jxrw_jxbxxb20231102 as select * from jw_jxrw_jxbxxb

------------课程开课学院
update jw_jh_kcdmb set kkbm_id=''  where kkbm_id ='1873202'

-------------培养方案开课学院-----
select * from jw_jh_pyfakcxxb where xfyqjd_id in (select  xfyqjd_id from jw_jh_pyfaxfyqxxb where pyfaxx_id in (select pyfaxx_id from jw_jh_pyfaxxb where zyh_id in('3101','2302','2305'))
)           and kkbm_id='1873202'

update jw_jh_pyfakcxxb set kkbm_id='1873205'where xfyqjd_id in 
(select  xfyqjd_id from jw_jh_pyfaxfyqxxb where pyfaxx_id in (select pyfaxx_id from jw_jh_pyfaxxb where zyh_id in('2812','2804'))
)           and kkbm_id='1873202'

-------------教学计划开课学院-----
select  * from jw_jh_jxzxjhkcxxb where kkbm_id ='1873202' and njdm_id>2020 and zyh_id in('3101','2302','2305')
update jw_jh_jxzxjhkcxxb set kkbm_id='1873203'  where kkbm_id ='1873202' and njdm_id>2020 and zyh_id in('3101','2302','2305')

update jw_jh_jxzxjhkcxxb set kkbm_id='1873205'  where kkbm_id ='1873202' and njdm_id>2020 and zyh_id in('2812','2804')

------------教学任务开课学院---------
select  * from jw_jxrw_jxbxxb where jxb_id in 
(
select  distinct jxb_id from jw_jxrw_jxbhbxxb  where zyh_id in ('3101','2302','2305') and njdm_id>2020

) and kkbm_id='187320'

update jw_jxrw_jxbxxb set  kkbm_id='1873205' where jxb_id in 
(
select  distinct jxb_id from jw_jxrw_jxbhbxxb  where zyh_id in ('2812','2804') and njdm_id>2020

) and kkbm_id='1873202'

----------------班级所在学院-----------------
select * from zftal_xtgl_bjdmb where zyh_id='2302' and njdm_id>2020 for update

update zftal_xtgl_bjdmb set jg_id='1873203' where zyh_id='3101' and njdm_id>2020 
update zftal_xtgl_bjdmb set jg_id='1873205' where zyh_id in ('2812','2804') and njdm_id>2020 

---------------学生所在学院------------
select * from jw_xjgl_xsjbxxb where zyh_id in ('3101','2302','2305') and njdm_id>2020 
update jw_xjgl_xsjbxxb set jg_id='1873203' where zyh_id in ('3101','2302','2305') and njdm_id>2020 
update jw_xjgl_xsxjxxb set jg_id='1873203' where zyh_id in ('3101','2302','2305') and njdm_id>2020 and xnm='2023'
update jw_xjgl_xsxjxxb set jg_id='1873205' where zyh_id in ('2812','2804') and njdm_id>2020 and xnm='2023'
update zftal_xtgl_yhb a set jgdm =(select jg_id from jw_xjgl_xsjbxxb b where a.yhm=b.xh) where yhm in (select xh from jw_xjgl_xsjbxxb where njdm_id>2020 and 
zyh_id in ('3101','2302','2305','2812','2804')) 

--------------专业和教师信息前台维护--------
--------------数据归属范围前台维护--------


Q：基本选课规则页面，需要不及格课程可以选课（kklxdm换一下）
select * from jw_xk_xkkzxmbb where kklxdm='99' and zdm in ('SFKGBCX','BJGKCZXBBJWCX')


Q：oracle自动生成随机数
select unique round(dbms_random.value *100) sjs from dual   --100以内随机数


Q：体育版块课【生成学生等级】没有数据
 select * from jw_jcdml_xtnzb  where zdm = 'BKKPKFS' for update  改成0
生成对应学期学生时盒信息

----------------建中间库并授权创建表权限-----------------
create user dtw_jwuser   identified by dtw_jwuser;
alter user dtw_jwuser   default tablespace zf;
grant create session,create view to  dtw_jwuser ;
grant create table to  dtw_jwuser ;
grant unlimited tablespace to dtw_jwuser ;
alter user dtw_jwuser   quota unlimited on zf;


---跨服务器scp
scp -r root@10.10.10.49:/u01/dist-deluxe/apps/zftal-ui-v5-1.0.2  /u01/dist-deluxe/apps----远程到本地


----周次节次转换函数
select fn_bittozc(384*2) from dual;  --384为jw_pk_kbsjb中的jc或者zcd，8,9
select get_jctobinary('8,9') from dual;–384
select get_jctobinary('01-04,07-10,13-16') from dual;---周次转化

正方 杨孝健:
get_jxbkcxzxx(jxb.jxb_id,'2') as KCXZM,
get_jxbkcxzxx(jxb.jxb_id,'0') as KCXZ,

get_weeksdesc(a.zcd) as SKZC,--1-5周(单),11-19周(单)
get_jcbinarydesc(kb.zcd,'')as SKZC,--1-1,3-3,5-5,11-11,13-13,15-15,17-17,19-19
fn_bittozc(kb.zcd*2) as SKZC,--1,2,3,5,6,8
fn_bittozcmx(zcd) SKZC,---111100011
fn_kckssj(jxb_id),--课程开始时间
fn_kcjssj(jxb_id),--课程结束时间


Ⅴ、功能页面授权给老师角色
jstopmkmcb_id值取zftal_xtgl_jstopmkmcb
select *from zftal_xtgl_jstopmkmcb;
insert into zftal_xtgl_jsgnmkgxb (JSTOPMKMCB_ID, GNMKDM, XSXH) values ('64', 'N214505', 5); 


生成试卷号，有几个考试任务生成不出来
1、考试形式是否有维护
2、需要生成的任务的同门课是否已经有排过考试时间的

-------全库解析
select 'analyze table    '   ||table_name || ' compute statistics;'   from    user_tables;

------------页面打开提示无权限
### N302005成绩录入设置
update zftal_xtgl_gnmkczb set qxdm='/cjlrkzsz/cjlrkzsz_cxCjlrkzsz.html:cx'where  gnmkdm='N302005' and czdm='cx';
commit;

### N302010 补考成绩录入设置
update zftal_xtgl_gnmkczb set qxdm='/bkcjlrsz/bkcjlrsz_cxBkcjlrsz.html:cx'where  gnmkdm='N302010' and czdm='cx';
commit;

### N153505 教学执行计划
update zftal_xtgl_gnmkczb set qxdm=''where  gnmkdm='N153505'  and qxdm is not null ;
commit;

### N300403-教学班成绩分项设置
select * from zftal_xtgl_gnmkczb where  gnmkdm='N300403' 
update zftal_xtgl_gnmkczb set qxdm='/cjblxxgl/cjbl_cxCjblxx.html:cx' where  gnmkdm='N300403'  and czdm='cx';
commit;
insert into zftal_xtgl_jsgnmkczb (JSDM, GNMKDM, CZDM, DYYM, CZMC)
values ('admin', 'N300403', 'cx', null, null);
commit;

### N300402-成绩分项比例维护
select * from zftal_xtgl_gnmkczb where  gnmkdm='N300402' 
update zftal_xtgl_gnmkczb set qxdm='/cjblxxgl/cjbl_cxCjblxx.html:cx' where  gnmkdm='N300402'  and czdm='cx';
commit;
insert into zftal_xtgl_jsgnmkczb (JSDM, GNMKDM, CZDM, DYYM, CZMC)
values ('admin', 'N300402', 'cx', null, null);
commit;


### ftp服务器重启tomcat
systemctl stop vsftpd
ps -ef|grep vsftpd
systemctl start vsftpd



### 数据库删除归档日志 ORA-00257: archiver error. Connect internal only, until freed.
su - oracle
rman target /
delete archivelog all;


### 创建定时任务
#### 1.创建存储过程
create or replace procedure njgydxbdzctb /*正脉报到注册zzdy.t_BDZCB同步至教务系统*/ as
begin
     update jw_xjgl_xsjbxxb set bdzcbj='2' 
/*SELECT * FROM jw_xjgl_xsjbxxb */WHERE
 XH IN (select XH from zzdy.t_BDZCB where XN=(SELECT XNMC FROM JW_JCDM_XNB WHERE XNM=( select ZDZ  from zftal_xtgl_xtszb where zdm='DQXNM')) 
 AND XQ=(SELECT mc FROM ZFTAL_XTGL_JCSJB WHERE LX='0001' and dm=(select ZDZ  from zftal_xtgl_xtszb where zdm='DQXQM')));

 update jw_xjgl_xsxjxxb xj set bdzcbj='2' 
/* SELECT * FROM jw_xjgl_xsxjxxb xj */WHERE
 (select xh from jw_xjgl_xsjbxxb xs where xs.xh_id=xj.xh_id) IN (select XH from zzdy.t_BDZCB where XN=(SELECT XNMC FROM JW_JCDM_XNB WHERE XNM=( select ZDZ  from zftal_xtgl_xtszb where zdm='DQXNM')) 
 AND XQ=(SELECT mc FROM ZFTAL_XTGL_JCSJB WHERE LX='0001' and dm=(select ZDZ  from zftal_xtgl_xtszb where zdm='DQXQM'))) 
 and xj.xnm=(select zdz  from zftal_xtgl_xtszb where zdm='DQXNM') 
 and xj.xqm=(select zdz  from zftal_xtgl_xtszb where zdm='DQXQM')
     commit;
end;

#### 2.查询当前定时任务
 select * from all_jobs 

#### 删除定时任务语句
BEGIN
  DBMS_JOB.REMOVE(job => job编号);
END;
/ 

#### 3.创建定时任务
declare
  job number;
 BEGIN
    DBMS_JOB.SUBMIT(
        job        => job,  -- 这里<job_number>是一个变量，用来存储作业号
        what       => 'BEGIN njgydxbdzctb; END;',----BEGIN 存储过程名称；END;
        next_date  => TRUNC(SYSDATE) + INTERVAL '4' HOUR + INTERVAL '1' DAY,  -- 明天4点开始执行
        interval   => 'TRUNC(SYSDATE) + INTERVAL ''1'' DAY'  -- 每天执行一次
    );
END;
/

#### 4.查询当前定时任务（检查是否创建成功）
 select * from all_jobs 

### 死锁查询并杀死
SELECT ' alter system kill session  ' ||''''||l.session_id ||',' ||s.serial#||','||'@'||s.inst_id||''';' sgw ,
l.locked_mode,
'kill -9 '||(select spid from gv$process where addr=s.PADDR and rownum='1') spid,
l.oracle_username,
l.os_user_name,
s.machine,
s.terminal,
o.object_name,
s.logon_time
FROM gv$locked_object l, all_objects o, gv$session s
WHERE l.object_id = o.object_id
  AND l.session_id = s.sid  --and object_name='JW_KW_KSMCJXBDZB'
ORDER BY sid, s.serial#;

### 教学任务设置增加修改字段：
1、课程性质：
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'kcxzdm', '课程性质', 'jw_jxrw_jxbhbxxb', 1, '1', '21', '', 1, 'database:select kcxzdm key,kcxzmc value from jw_jh_kcxzdmb where sfty=''0''');
2、课程类型：
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'kclxdm', '课程类型', 'jw_jxrw_jxbxxb', 1, '1', '20', '', 1, 'database:select kclxdm key,kclxmc value from jw_jh_kclxdmb where tybj=''0''');
3、课程类别
insert into zftal_xtgl_plxgxxb (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'kclbdm', '课程类别', 'jw_jxrw_jxbhbxxb', 1, '1', '21', '', 1, 'database:select kclbdm key,kclbmc value from jw_jh_kclbdmb where tybj=''0''');
4、学时类型
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'xsdm', '学时类型', 'jw_jxrw_jxbxxb', 1, '1', '20', '', 1, 'database:select xsdm key,xsmc value from jw_jh_kcxsxxdmb where sfqy=''1''');
5、学分
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'xf', '学分', 'jw_jxrw_jxbxxb', 1, '1', '20', '', 2, 'basedata:isNot');
6、开课学院
insert into ZFTAL_XTGL_PLXGXXB (GNMKDM, ZDDM, ZDMC, ZDBM, XSSX, SFQY, ZDCD, ZDZYQ, ZDLX, ZDLY)
values ('N154501', 'kkbm_id', '开课学院', 'jw_jxrw_jxbxxb', 1, '1', '50', '{required:true}', 1, 'database:select jg_id key,jgmc value from zftal_xtgl_jgdmb' );



-----------学籍预警不考虑绩点统计课程
 insert into zftal_xtgl_xtszb (XTSZ_ID, ZDM, ZDZ, SSMK, ZS, BZ, SSGNMKDM, ZDZYQ, ZDLX, ZDLY, XTSZBLYB)
	 values ('SFKLCZKCSZJDTJ', 'SFKLCZKCSZJDTJ', '0', 'CJMK', '是否考虑参加绩点统计课程设置', '0：否，1：是', '', '{required:true}', 3, 'fixed:0,1', '');



-----sql直接配课
insert into  jw_xk_xsxkb(xnm,xqm,jxb_id,xh_id,kch_id,xklc,xkbj,zy,bz)
 select '2024'xnm ,'3' xqm ,a.jxb_id,b.xh_id , c.kch_id ,'1' xklc,'30' xkbj ,'1' zy ,'zq20240910' bz 
 from jw_jxrw_jxbhbxxb  a   , jw_jxrw_jxbxxb  c  ,jw_xjgl_xsjbxxb b 
   where a.bh_id=b.bh_id and a.zyh_id=b.zyh_id and a.njdm_id=b.njdm_id   and a.jxb_id=c.jxb_id  ---and a.zyfx_id=b.zyfx_id 
   and exists (select 1 from jw_jxrw_jxbhbxxb a  , jw_jxrw_jxbxxb  c  where a.jxb_id=c.jxb_id  )
 --- and   b.njdm_id in ('2015','2014','2013','2012') 
 -- and  b.xnm='2016' and b.xqm='12'  
  and  b.sfzx='1' ---and b.xjztdm='1'
   ---and   a.njdm_id in ('2015','2014','2013','2012')  
   and  c.kkzt='1'
   and  c.xnm||c.xqm='20243'  ---and kch_id  in (select  kch_id from jw_jh_kcdmb where  kcmc like '%体育%')
  ---and a.kcxzdm not in (select kcxzdm from jw_jh_kcxzdmb where kcxzmc in ('专业选修课', '专业任选课', '学科基础选修课', '专业基础选修课','辅修课'))
  ---- and  kch_id  in (select  kch_id from jw_jh_kcdmb where kcmc  like '%STUDIO (1)观念与形式%')

  and   not exists (select 1 from  jw_xk_xsxkb d  where   d.jxb_id=a.jxb_id  and d.xh_id=b.xh_id)


### 学生选课提示未完全评教
----学生提交评价结果更新状态标记----------------
状态标记:0-初始值(评价记录为保存状态);1-完全评价;2-部分评价
select * from jw_pj_xspjztb where xnm='2024' and xqm='3' and ztbj!='1'
update jw_pj_xspjztb set ztbj='1' where xnm='2024' and xqm='3' and ztbj!='1'

### 打印成绩总表时选择等级考试项目
insert into JW_BYGL_CJZBDYSZXXXB(xxdm,szxmc,szxdm,px,xsbz) values('00000','需打印等级考试项目','xdydjksxm','10','以下项目勾选后，将在成绩总表打印时打印');--执行时请修改学校代码
commit;


### 批量给老师、学生、管理员插入我的应用
1、	教师：
（1）清空教师角色我的应用
create table bak_jsyy03  as 
select * from zftal_xtgl_jsgnmkyyb where jsdm='js';   
delete from zftal_xtgl_jsgnmkyyb where jsdm='js' ;
（2）把admin切换到教师角色，把常用的功能加入我的应用，然后查询下
select * from zftal_xtgl_jsgnmkyyb where jsdm='js';
（3）根据教师角色admin用户增加的我的应用，把教师常用功能插入我的应用
insert into zftal_xtgl_jsgnmkyyb(yhid,yhlx,jsdm,gnmkdm,gnmkmc,dyym,xssx,tblj,gnmkjc) 
select a.jgh_id,b.yhlx,b.jsdm,b.gnmkdm,b.gnmkmc,b.dyym,b.xssx,b.tblj,b.gnmkjc   from jw_jg_jzgxxb  a,zftal_xtgl_jsgnmkyyb b
where   b.jsdm='js'   and jgh_id<>'admin';
2、	学生
（1）清空学生角色我的应用
create table bak_xsyy03  as 
select * from zftal_xtgl_jsgnmkyyb where jsdm='xs';   
delete from zftal_xtgl_jsgnmkyyb where jsdm='xs' and yhid not in (‘admin’);
（2）把admin切换到学生角色，把常用的功能加入我的应用，然后查询下
select * from zftal_xtgl_jsgnmkyyb where jsdm='xs';
（3）根据学生角色admin用户增加的我的应用，把学生常用功能插入我的应用
insert into zftal_xtgl_jsgnmkyyb(yhid,yhlx,jsdm,gnmkdm,gnmkmc,dyym,xssx,tblj,gnmkjc) 
select a.xh_id,b.yhlx,b.jsdm,b.gnmkdm,b.gnmkmc,b.dyym,b.xssx,b.tblj,b.gnmkjc   from jw_xjgl_xsjbxxb  a,zftal_xtgl_jsgnmkyyb b
where  a.xh_id<>'admin' and b.jsdm='xs';

### 学生密码批量初始化为身份证后6位
update zftal_xtgl_yhb yh set 
kl=(select getmd5(substr(zjhm,-6,6)) zj from jw_xjgl_xsjbxxb xs where xs.xh=yh.yhm) where yhlx='student'
 and yhm in (select xh
                   from jw_xjgl_xsjbxxb
                  where zjhm is not null
                    and njdm_id >/*2020*/);

### 2

### 查服务器系统环境
cat /etc/os-release

### 日均访问登录量，需替换日期
select round(to_number(dll)/(to_date('2025-07-31', 'yyyy-mm-dd')-to_date('2025-01-01', 'yyyy-mm-dd')+1)) 
from (select count(*) dll from zftal_xtgl_czrzb a where czrq between '2025-01-01' and '2025-07-31'and czlx='login')




### 访问量最高值，需替换日期
select * from (select rq,count(1) dll from  
(select substr(czrq,1,10) rq,a.* from zftal_xtgl_czrzb a where czrq between '2025-01-01' and '2025-07-31'and czlx='login'
) group by rq order by dll desc) where rownum=1




 SELECT SUM(sm) sm ,MAX(sm) zdrsmf FROM  
 (
 select xkfz,count(1) sm from  
(select substr(xksj,1,16) xkfz,xksj,a.* from jw_xk_xsxkb a where /*xkbj = '10' AND*/ xksj BETWEEN '2025-06-18' and '2025-06-23'
)
 group by xkfz order by xkfz) t
 ;




select * from zftal_xtgl_bbjlb
