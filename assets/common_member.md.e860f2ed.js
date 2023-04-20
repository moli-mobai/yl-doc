import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.366ac521.js";const i=JSON.parse('{"title":"分配成员","description":"","frontmatter":{},"headers":[],"relativePath":"common/member.md"}'),p={name:"common/member.md"},o=l(`<h1 id="分配成员" tabindex="-1">分配成员 <a class="header-anchor" href="#分配成员" aria-label="Permalink to &quot;分配成员&quot;">​</a></h1><pre><code>拿岗位管理的分配成员来做例子
</code></pre><h2 id="获取分配成员的数据" tabindex="-1">获取分配成员的数据 <a class="header-anchor" href="#获取分配成员的数据" aria-label="Permalink to &quot;获取分配成员的数据&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">plain</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Plus</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @click=&quot;handleAdd&quot;&gt;添加&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span></span>
<span class="line"><span style="color:#89DDFF;">	&lt;!-- </span><span style="color:#C792EA;">人员选择组件</span><span style="color:#89DDFF;"> --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	&lt;div </span><span style="color:#C792EA;">v-show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isitemList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ItemListSelect</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">itemListRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @setSelectItem=&quot;setRelationIds&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">		&lt;/ItemListSelect&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MembersDialog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">import ItemListSelect from &#39;@/components/ItemListSelect/index.vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const itemListRef = ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">InstanceType</span><span style="color:#89DDFF;">&lt;typeof </span><span style="color:#A6ACCD;">ItemListSelect</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;">(); // 获取组件实例类型</span></span>
<span class="line"><span style="color:#A6ACCD;">const dutyCode = ref(&#39;我是岗位id&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">/** 分配角色新增按钮 */</span></span>
<span class="line"><span style="color:#A6ACCD;">function handleAdd() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 人员选择组件，name、url、query、otherFiled自行配置，selectedList对应获取</span></span>
<span class="line"><span style="color:#A6ACCD;">	let name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">人员编辑</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;  </span><span style="color:#676E95;font-style:italic;">// 标题</span></span>
<span class="line"><span style="color:#A6ACCD;">	let url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/operate/user</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">; </span><span style="color:#676E95;font-style:italic;">// 人员列表请求接口url</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 接口请求参数</span></span>
<span class="line"><span style="color:#A6ACCD;">	let query </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">pageSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100000</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 穿梭框展示配置</span></span>
<span class="line"><span style="color:#A6ACCD;">	let otherFiled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">labelName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">realName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">labelId</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">userId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 值</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">searchKey</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">realName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 搜索框 关键字参数名</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	let selectedList: any </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []; </span><span style="color:#676E95;font-style:italic;">// 已选择人员数据</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	let sparam </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">pageSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100000</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 岗位已选择人员数据-接口请求</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">getHttpUserlistByPosition</span><span style="color:#A6ACCD;">(sparam</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dutyCode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">resultList</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">selectedList</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">resultList</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//已选择人员数据</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">isitemList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">itemListRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">transferInit</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">otherFiled</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">selectedList</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 人员选择完毕后的处理-保存所选人员并刷新列表</span></span>
<span class="line"><span style="color:#A6ACCD;">function setRelationIds(type: any, selectedIds: any) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择人员数组</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> selectedIds);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;"> (selectedIds) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">addHttpUserDuty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">selectedIds</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dutyCode.value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">.</span><span style="color:#F07178;">then</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">proxy</span><span style="color:#A6ACCD;">!.</span><span style="color:#FFCB6B;">$modal</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">msgSuccess</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">保存成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#F07178;">getList</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		proxy!.$modal.msg(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">未添加人员</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">);</span></span>
<span class="line"><span style="color:#F07178;">	}</span></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"><span style="color:#F07178;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">小结小结</p><p>其实上方案例 主要就是如何使用组件、命名，跟拿到人员选择值selectedIds。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> ItemListSelect组件ref命名，跟emit事件命名</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ItemListSelect</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">itemListRef</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @setSelectItem=&quot;setRelationIds&quot;&gt;&lt;/ItemListSelect&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">itemListRef</span><span style="color:#89DDFF;"> = ref&lt;InstanceType&lt;typeof </span><span style="color:#C792EA;">ItemListSelect</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">2.setRelationIds() 事件内的selectedIds，就是要获取的人员选择值了！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">function setRelationIds(type: any, selectedIds: any) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择人员数组</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> selectedIds); </span><span style="color:#676E95;font-style:italic;">// 拿到selectedIds了。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div>`,5),t=[o];function e(c,r,D,y,F,C){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{i as __pageData,d as default};
